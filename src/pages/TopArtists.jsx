
import { useSelector } from 'react-redux';
import { ArtistCard, Error, Loader, SongCard} from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { adaptAudiusSong } from '../utils/audiusAdapter';

const TopArtists = () => {
    
    const {activeSong, isPlaying } = useSelector((state)=> state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();
    
    // checking if my component receiving the data from rtk query or not
    // console.log("artist data",data)
    //Use of adapter for making api adpat my application structure 
    const artist = data?.data?.map(adaptAudiusSong) ?? [];
    // checking if artist receiving the data from adapter or not
    
    //  console.log("artistadapt",artist);
    if (isFetching) return <Loader title="Loading Top Charts"/>
    if (error) return <Error/>
    return(
            <div className="flex flex-col">
                <h2 className="font-bold text-3xl text-white 
                text-left mt-4 mb-10">Top Artists</h2>
                <div className="flex flex-wrap sm:justify-start justify-center
                gap-8">
                    {artist?.map((track)=>(
                        <ArtistCard
                          key={track.key}
                          track={track}
                        />
                    ))}
                </div>
            </div>

    )
}
export default TopArtists;
