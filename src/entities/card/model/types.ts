export type TCardReactions = {
    likes: number;
    dislikes: number;
}

export type TCard = {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: TCardReactions;
    views: number;
    userId: number;
}

export type TCardOptions = {
    posts: TCard[];
    total: number;
    skip: number;  
    limit: number;
}
