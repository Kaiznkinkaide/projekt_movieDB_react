const MovieItem = ({title, year, director, duration, genre, rate}) => {
    return ( 
        <>
        <h4>{title}</h4>
        <p>{year}</p>
        <p>{director}</p>
        <p>{duration}</p>
        <p>{genre}</p>
        <p>{rate}</p>
        </>
     );
}
 
export default MovieItem;