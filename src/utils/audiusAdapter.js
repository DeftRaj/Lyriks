import { defaultCover } from "../assets";
import { profilePicture } from "../assets";

export const adaptAudiusSong = (track) => ({
  key: track.track_id,

  trackId: track.track_id,

  id: track.id,

  title: track.title,

  subtitle: track.user?.name ?? "Unknown Artist",

  // genreTitle: track.genre ?? "Unknown Genre",

  images: {
    coverart:
    track.artwork?.["1000x1000"] ||
    track.artwork?.["480x480"] ||
    track.artwork?.["150x150"] ||
    // track.user?.profile_picture?.["1000x1000"] ||
    // track.user?.profile_picture?.["480x480"] ||
    // track.user?.profile_picture?.["150x150"] ||
     defaultCover ||
      "",
  },

  hub: {
    actions: [
      {},
      {
        uri: track.stream?.url,
      },
    ],
  },

  artists: [
    {
      id: track.user?.id,
      alias: track.user?.name,
      bio : track?.user?.bio ||
      "Bio not available",
      profile: track.user?.profile_picture?.["1000x1000"] ||
      track.user?.profile_picture?.["480x480"] ||
      track.user?.profile_picture?.["150x150"] ||
      profilePicture ||
      "",
    },
  ],

  

  duration: track.duration,

  genre: track.genre,

  stream: track.stream?.url,

  tags: track.tags,

  releaseDate: track.release_date,

  raw: track,
 

});