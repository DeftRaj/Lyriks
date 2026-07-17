export const adaptJamendoSong = (track) => ({
  key: track.id,

  title: track.name,

  subtitle: track.artist_name,

  images: {
    coverart: track.image,
  },

  hub: {
    actions: [
      {},
      {
        uri: track.audio,
      },
    ],
  },

  artists: [
    {
      alias: track.artist_name,
      id: track.artist_id,
    },
  ],

  album: {
    name: track.album_name,
  },

  duration: track.duration,

  raw: track,
});