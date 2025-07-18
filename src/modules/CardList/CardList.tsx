import { Card, type TCard } from '@/entities/card';
import { useCards } from './model';
import s from './CardList.module.css';
import { Button, Spin } from 'antd';
import { DislikeOutlined, LikeOutlined, LoadingOutlined } from '@ant-design/icons';
import { Chip } from '@/shared/ui/Chip';

export const CardList = () => {
  const {cards, isLoading, observer} = useCards();
  return (
    <div className={s.card_list_wrapper}>
      <div className={s.card_list_container}>
        {isLoading 
          ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /> 
          : <>
            {cards?.map((card: TCard) => (
              <Card key={card.id} data={card}>
                <div className={s.card_list_body}>
                  {card.body}
                </div>
                <div className={s.card_list_tags}>
                  {card.tags?.map((tag: string) => (
                    <Chip label={tag} key={tag}/>
                  ))}
                </div>
                <div className={s.card_list_reactions}>
                  <Button type="primary" icon={<LikeOutlined />}>{card.reactions.likes}</Button>
                  <Button type="default" icon={<DislikeOutlined />}>{card.reactions.dislikes}</Button>
                </div>
              </Card>
            ))}
            {observer}
          </>}
      </div>
    </div>
  );
};
