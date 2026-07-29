import {Link} from 'react-router-dom';
import {profilePicture} from '../assets';


const DetailsHeader = ({artistId, data}) => {
  
    
  return(
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black 
    sm:h-48 h-28"/>
      <div className=" absolute inset-0 flex items-center ">
        <img 
         alt="art"
         src={data?.artists[0]?.profile || data?.images?.coverart}
         onError={(e) => {e.target.src = profilePicture;
         }}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full
         object-cover border-2 shadow-xl shadow-black"/>
        
        <div className="ml-5" >
          {/* artist name */}
          
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? data?.artists?.[0]?.alias : data?.title}
          </p>

          {!artistId && (
            <Link to={`/artists/${data?.artists[0].id}`}>
              <p className="text-base text-gray-400 mt-2">
                {data?.subtitle}</p>
            </Link>
          )}

          { /*genere*/ }
          {/* <p className=" text-base text-gray-400 mt-2">
            {artistId ? 
            data?.genre : songData?.genres?.primary}
          </p> */}
          {artistId && (
            
              <p className='text-sm text-gray-300 mt-2 max-h-14 
                  overflow-y-auto pr-2'>
                Bio : {data?.artists?.[0]?.bio}
              </p>
            
          )}
          
        </div>
      </div>
    <div className="w-full sm:h-44 h-24" />
  </div>

 );
};
export default DetailsHeader;
