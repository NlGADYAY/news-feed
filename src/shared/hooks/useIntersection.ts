import { useEffect, useRef, useState, useCallback } from 'react';

export const useIntersection = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const setObserver = useCallback((node: HTMLDivElement | null) => {
    if (observerRef.current) {
      observerRef.current = null;
    }
    if (node) {
      observerRef.current = node;
    }
  }, []);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options, observerRef.current]); 

  return { isIntersecting, observerRef: setObserver };
};
