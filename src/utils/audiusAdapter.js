import { defaultCover } from "../assets";
import { profilePicture } from "../assets";

export const adaptAudiusSong = (track) => ({
  key: track.id,

  title: track.title,

  subtitle: track.user?.name ?? "Unknown Artist",

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
      profile: track.user?.profile_picture?.["1000x1000"] ||
      track.user?.profile_picture?.["480x480"] ||
      track.user?.profile_picture?.["150x150"] ||
      profilePicture ||
      "",
    },
  ],

  duration: track.duration,

  genre: track.genre,

  raw: track,
 

});