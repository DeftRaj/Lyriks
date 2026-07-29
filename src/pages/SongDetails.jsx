import {useParams} from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import {DetailsHeader, Error, Loader, RelatedSongs} from '../components';
import {setActiveSong, playPause } from '../redux/features/playerSlice';

import { useGetSongDetailsQuery } from '../redux/services/shazamCore';
import { adaptAudiusSong } from '../utils/audiusAdapter';
import PlayPause from '../components/PlayPause';
const SongDetails = () => {
    

    const dispatch = useDispatch();
    const {songid} = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const { data: songDatas, isFetching: isFetchingSongDetails} =
            useGetSongDetailsQuery({trackid: songid});

    const songData = songDatas?.data ? adaptAudiusSong(songDatas.data) : null;
    console.log("songdata1",songData)

    const handlePauseClick = () => {
        dispatch(playPause(false));
       };
    
    const handlePlayClick = () => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true));
       };
    return(
        <div className="flex flex-col">
            <DetailsHeader 
                artistId={songData?.artists[0]?.id} 
                data={songData}
            />

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics :</h2>
                
                <div className="mt-5">
                    {/* {songData?.sections[1].type === 'Lyrics' ?
                    songData?.sections[1].text.map((Line, i) =>(
                        <p className="text-gray-400 text-base my-1">{Line}</p>
                    )) : <p>Sorry, no lyrics found!</p>} */}
                    <p>Sorry, no lyrics found!</p>
                </div>
            </div>
{/* 
            <RelatedSongs 
              data={songData}
              songid={songid}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            /> */}
        </div>
    );
};

export default SongDetails;