import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const generateBaseQuery = (baseUrl?: string ) => {
  return fetchBaseQuery({
    baseUrl: baseUrl ? `${baseUrl}` : `${import.meta.env.VITE_API_URL}`,
  });
};
    