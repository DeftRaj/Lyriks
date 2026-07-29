import { useGetSearchTracksQuery } from "../redux/services/shazamCore";
import { useParams } from "react-router-dom";
import {Error, Loader, SongCard} from "../components"
import { adaptAudiusSong } from "../utils/audiusAdapter";
import { useSelector } from "react-redux";

const Search = () =>{ 
   const { searchTerm } = useParams();
   console.log("st",searchTerm)
   const { data, isFetching, error } = useGetSearchTracksQuery({
    searchTerm,});
    console.log("data",data)
   const {activeSong, isPlaying} = useSelector((state)=>state.player);
   
   const songs = data?.data?.map(adaptAudiusSong) ?? [];
   console.log("songs",songs)
   if (isFetching) return <Loader title="Searching songs..." />;
   console.log("e",error)
   if (error) return <Error />;

  return(
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white mt-4 mb-8">
        Search Results for "{searchTerm}"
      </h2>

    
      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
      {songs.map((song, i) => (
        <SongCard
            key={song.key}
            song={song}
            data={songs}
            i={i}
            isPlaying={isPlaying} 
            activeSong={activeSong}
        />
       
      ))}
      </div> 
    </div>
  );
}

export default Search;
