import MovieList from "../movilist/MovieList";
import { useState } from "react";
import"./main.css"



const Main = ({data}) => {
    const [sortedArray, setSortedArray] = useState(data);
    const sortedBy = (sortType) =>{
        let sorted
        if (sortType === "year-up"){
        sorted = [...data].sort((a, b) => a.year - b.year)
        } else if (sortType === "year-down"){
        sorted = [...data].sort((a, b) => b.year - a.year);
        } else if (sortType === "rating-up"){
        sorted = [...data].sort((a, b) => b.rate - a.rate);
        } else if (sortType === "name-up"){
        sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortType === "name-down"){
        sorted = [...data].sort((a, b) => b.title.localeCompare(a.title));
        }
        setSortedArray(sorted)
    }
    return ( 
        <>
        <button onClick={() => sortedBy("year-up")}>year up</button>
        <button onClick={() => sortedBy("year-down")}>year down</button>
        <button onClick={() => sortedBy("rating-up")}>best rate</button>
        <button onClick={() => sortedBy("name-up")}>A - Z</button>
        <button onClick={() => sortedBy("name-down")}>Z - A</button>
        <section>
        <MovieList
        data={sortedArray}/>
        </section>
        </>
     );
}
 
export default Main;