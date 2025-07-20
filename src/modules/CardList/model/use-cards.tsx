import { useGetCardsQuery } from '@/entities/card';
import { useIntersection } from '@/shared/hooks';
import { useDeferredValue, useEffect, useState } from 'react';

export const useCards = () => {
  const [skip, setSkip] = useState(10);
  const { data, isLoading } = useGetCardsQuery({ limit: 10, skip: skip });
  const { isIntersecting, observerRef } = useIntersection({rootMargin: '0px 500px'});

  useEffect(() => {
    if (isIntersecting && !isLoading ) { 
      if(data && skip >= data.total) return;
      setSkip((prev) => prev + 10);
    }
  }, [isIntersecting, isLoading]);

  const observer = (
    <span
      aria-hidden="true"
      tabIndex={-1}
      ref={observerRef}
      style={{ height: '1px' }}
    />
  );

  const cardUI = useDeferredValue(data?.posts ?? []);

  return { cards: cardUI, isLoading, observer};
};
