import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { getImageUrl, getMovieDetails } from "../services/tmdb";
import { BeatLoader } from "react-spinners";

const MovieDetail = () => {
  const { id } = useParams();
    
  const { data: movie, loading, error } = useFetch(()=>getMovieDetails(id), [id]);

  if(error){
    return(
      <div className="text-center p-10">
        <p className="text-red-800">Error al cargar la película</p>
      </div>
    )
  }
  if(loading)  <BeatLoader color="#052F4A" />

  return (
    <article className="max-w-4xl mx-auto">
      <header className="relative h-96 mb-8">
        <img src={getImageUrl(movie?.backdrop_path, "original")} alt={movie?.title} className="w-full h-full object-cover rounded-lg"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 text-white p-6">
            <h1 className="text-4xl font-bold">{movie?.title}</h1>
            <p className="text-lg">{movie?.runtime} min - {movie?.release_date.split("-")[0]}</p>
            <p>{movie?.vote_average}⭐</p>
          </div>
        </div>
      </header>
    </article>
  );
}

export default MovieDetail

