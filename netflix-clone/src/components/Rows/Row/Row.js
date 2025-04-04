import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "./../../../utils/axios.js";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_Url = `https://image.tmdb.org/t/p/original`;

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      ).catch((error)=>{
        console.log('Error', error)
      })
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => {
          return (
            <img
              onClick={()=>handleClick(movie)}
              key={index}
              src={`${base_Url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          );
        })}
      </div>
      <div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
};

export default Row;
