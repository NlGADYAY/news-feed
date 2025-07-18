import  { memo } from 'react';
import type { TCard } from '../model/types';
import { Card as AntdCard, type CardProps } from 'antd';
import s from './Card.module.css';

type TCardProps = {
    data: TCard
    children?: React.ReactNode
} & CardProps

export const CardMemo : React.FC<TCardProps>= ({data, children, ...props}) => {
  return (
    <AntdCard {...props} title={data.title} className={s.card_wrapper}>
      {children}
    </AntdCard>
  );
};

export const Card = memo(CardMemo);
