
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard} from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { adaptAudiusSong } from '../utils/audiusAdapter';


const TopCharts = () => {
    const {activeSong, isPlaying } = useSelector((state)=> state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();
    // console.log(data)
    
    const charts = data?.data?.map(adaptAudiusSong) ?? [];
    // console.log(charts)
    if (isFetching) return <Loader title="Loading Top Charts"/>
    if (error) return <Error/>
    return(
            <div className="flex flex-col pt-[72px]">
                <h2 className="font-bold text-3xl text-white 
                text-left mt-4 mb-10">Discover Top Charts</h2>
                <div className="flex flex-wrap sm:justify-start justify-center
                gap-8">
                    {charts?.map((song,i)=>(
                        <SongCard
                          key={song.key}
                          song={song}
                          isPlaying={isPlaying}
                          activeSong={activeSong}
                          data={data}
                        />
                    ))}
                </div>
            </div>

    )
}
export default TopCharts;
