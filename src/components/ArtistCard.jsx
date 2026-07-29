import { useNavigate } from "react-router-dom";
import { profilePicture } from "../assets";


const ArtistCard = ({track}) => {
  const navigate = useNavigate();
  return(
    <div className="felx flex-col w-[250px] p-4 bg-white/5
    bg-opacity-80 backdrop-blur-sm animate-slideup
    rounded-lg cursor-pointer" onClick={()=> navigate(`/artists/${track?.artists[0]
      .id}`)}>
      <img alt="artist" 
       src={track?.artists?.[0]?.profile}
       className="w-full h-56 rounded-lg" 
       onError={(e) => {e.target.src = profilePicture;}}/>
      <p className="mt-4 font-semibold text-lg text-white
       truncate">{track.subtitle}</p> 
                          
                           
    </div>
  )
  
};

export default ArtistCard;
