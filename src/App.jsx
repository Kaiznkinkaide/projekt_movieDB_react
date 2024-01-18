import data from "./assets/data/data"
import './App.css'
import Header from "./assets/components/header/Header";
import Main from "./assets/components/main/Main";

function App() {
  console.log(data);


  return (
    <>
    <Header/>
    <Main data={data}/>

    </>
  )
}

export default App
