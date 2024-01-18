import { useState } from "react";
import"./button.css"

const Button = () => {
    const [sort, setSort] = useState("standard")
    console.log(sort);
    return ( 
        <>
        <button onClick={() => setSort("year-up")}>year up</button>
        <button onClick={() => setSort("year-down")}>year down</button>
        <button onClick={() => setSort("rating-up")}>best rate</button>
        <button>A - Z</button>
        <button>Z - A</button>
        </>
     );
}

export default Button;