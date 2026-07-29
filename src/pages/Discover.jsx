import {useDispatch, useSelector } from 'react-redux';
import { useState } from "react";

import { Error, Loader, SongCard, } from "../components";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { adaptAudiusSong } from "../utils/audiusAdapter";



const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state)=> state.player);
    const {data, isFetching, error} = useGetTopChartsQuery();
    const [selectedGenre, setSelectedGenre] = useState("All");
    const genreTitle = selectedGenre;

    const songs = data?.data?.map(adaptAudiusSong) ?? [];

    
    const genreOptions = ["All", ...new Set( songs
            .map((song) => song.genre)
            .filter(Boolean)),];
            
    const filteredSongs = selectedGenre === "All" ? songs
          : songs.filter((song) =>
          song.genre?.toLowerCase() === selectedGenre.toLowerCase());
    

    // const test= data?.data;
    // console.log(test);
    
    
    
    if(isFetching) return <Loader title= "Loading songs..."/>;

    if(error) return <Error/>;
    
    return (
      <div className="flex flex-col">
        <div
          className="w-full flex justify-between items-center 
         sm:flex-row flex-col mt-4 mb-10">
          <h2
            className="font-bold text-3xl text-white 
            text-left">
            Discover {genreTitle}
          </h2>

          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none">
            {genreOptions.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {filteredSongs.map((song, i) => (
            <SongCard
              key={song?.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={filteredSongs}
              i={i}
            />
          ))}
        </div>
      </div>
    );

};
export default Discover;
