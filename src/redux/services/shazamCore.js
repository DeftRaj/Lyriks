import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

  export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl: '/.netlify/functions/'
        
    }),
    endpoints: (builder)=> ({
        getTopCharts: builder.query({
           query: () => 'tracks', 
          }),
        getSongDetails: builder.query({ query: ({songid}) => `/
        tracks/details?track_id=${songid}`})
    }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
  } = shazamCoreApi;
