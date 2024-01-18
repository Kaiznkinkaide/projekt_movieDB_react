import MovieList from "../movilist/MovieList";
import"./main.css"
const Main = ({data}) => {
    return ( 
        <>
        <section>
        <MovieList
        data={data}/>
        </section>
        </>
     );
}
 
export default Main;