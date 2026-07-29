import {useParams} from 'react-router-dom';
import { useMemo } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DetailsHeader, Error, Loader, RelatedSongs} from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import { adaptAudiusSong } from '../utils/audiusAdapter';

import {playPause, setActiveSong} from '../redux/features/playerSlice';

const ArtistDetails = () => {
    const dispatch = useDispatch();
    const {id : artistId} = useParams();
    //varifying weather id being passes into the rtk or not
    // console.log("id",artistId)
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error} =
            useGetArtistDetailsQuery({artistid: artistId});

    // console.log("datas",artistDatas);

    const artistSongs = useMemo(
    () => artistData?.data?.map(adaptAudiusSong) ?? [],
    [artistData]
    );
    // console.log("artistdata",artistData);
    if(isFetchingArtistDetails) return <Loader title="Loading Artist Details"/>
    if(error) return <Error/>

    const handlePauseClick = () => {
        dispatch(playPause(false));
       };
    
    const handlePlayClick = (song,i) => {
        dispatch(setActiveSong({song, data: artistSongs, i}));
        dispatch(playPause(true));
       };

    return(
        <div className="flex flex-col">
            <DetailsHeader 
             artistId={artistSongs?.[0]?.artists?.[0]?.id} 
             data={artistSongs[0]} 
            />

            <RelatedSongs 
              data={artistSongs}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
        </div>
    );
};

export default ArtistDetails;