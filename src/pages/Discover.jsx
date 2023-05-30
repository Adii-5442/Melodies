import { Error, Loader , SongCard } from "../components";
import {genres} from  '../assets/constants'
import { useState } from "react";
import { useGetTopChartsQuery } from "../redux/services/spotify";

const Discover = () =>{

    const {data,isFetching , error} = useGetTopChartsQuery();
    const genreTitle = 'Pop'
    console.log("Adi:",data);

    const [genress, setgenres] = useState('Pop')

    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center 
            sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover {genreTitle}</h2>
                <select
                    onChange={(genre)=>{setgenres(genre.title)}}
                    value={genress}
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg sm:mt=0 mt-5"
                 >
                    {genres.map((genre) => <option key={genre.title} value={genre.value}>
                        {genre.title}</option>)}
                
                </select>

            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {[1,2,3,4,5,6,7,8,9,10].map((song,i) => (
                    <SongCard
                        key={song.key} 
                        song={song}
                        i={i}
                    />
                ))}

            </div>
        </div>
    )
}

export default Discover;
