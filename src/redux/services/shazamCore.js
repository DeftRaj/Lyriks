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
        getSongDetails: builder.query({ 
           query: ({trackid}) => `songid?track_id=${trackid}`
          }),
        getArtistDetails: builder.query({
           query: ({artistid}) => `artistSongs?artist_id=${artistid}`
          }),
        getSearchTracks: builder.query({
           query: ({searchTerm}) => `searchTracks?query=${encodeURIComponent(searchTerm)}`
          }),
        // getSearchTracks: builder.query({
        //    query: ({searchTerm,genre,mood}) => `searchTrack?query=${searchTerm}&genre=${genre}&mood=${mood}`
        //   }),

    }),   
  });


  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistDetailsQuery,
    useGetSearchTracksQuery
  } = shazamCoreApi;
