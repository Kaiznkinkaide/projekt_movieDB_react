import MovieItem from "../movieitem/MovieItem";
import"./movielist.css"

const MovieList = ({data}) => {
    return ( 
        <>
        
        {data.map((movie, index) => {
            return(
                <div className="card"key={index}>
                <MovieItem
                    title={movie.title}
                    year={movie.year}
                    director={movie.director}
                    duration={movie.duration}
                    genre={movie.genre}
                    rate={movie.rate}
                    />
                    </div>
            )
        })}
        </>
     );
}
 
export default MovieList;