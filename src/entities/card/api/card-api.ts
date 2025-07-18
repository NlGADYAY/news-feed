import { createApi } from '@reduxjs/toolkit/query/react';
import { generateBaseQuery } from '@/shared/services';
import type { TCardOptions } from '../model/types';


export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: generateBaseQuery(),
  endpoints: (builder) => ({
    getCards: builder.query<TCardOptions, { limit?: number; skip?: number }>({
      query: ({ limit = 10, skip = 0 }) => ({
        url: '/posts',
        params: { limit, skip },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.posts.push(...newItems.posts);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.skip !== previousArg?.skip;
      },
    }),
  }),
});

export const { useGetCardsQuery } = cardApi;
