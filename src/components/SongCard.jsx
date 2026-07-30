import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { defaultCover } from '../assets'

const SongCard = ({song, isPlaying, activeSong, data, i}) => {
   
   const dispatch = useDispatch();
   
   const handlePauseClick = () => {
    dispatch(playPause(false));
   };

   const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
   };
  //  console.log("Song object:", song);
  //   console.log("song.key:", song.key);
  //   console.log("song.id:", song.id);
  //   console.log("song.track_id:", song.track_id);

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80
  backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-46 group">
        <div
          className={`absolute inset-0 justify-center items-center 
       bg-black bg-opacity-50 group-hover:flex
       ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}
        `}>
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          className="w-full h-full rounded-lg object-cover"
          alt="song_img"
          src={song.images.coverart}
          onError={(e) => {
          e.target.src = defaultCover;
          }}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-grey-300 mt-1">
          <Link to={`/artists/${song.artists?.[0]?.id}`}>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  );
};
export default SongCard;
