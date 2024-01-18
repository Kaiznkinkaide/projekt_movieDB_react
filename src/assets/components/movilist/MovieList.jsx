import MovieItem from "../movieitem/MovieItem";


const MovieList = ({data}) => {
    return ( 
        <>
        
        {data.map((movie, index) => {
            return(
                <div key={index}>
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