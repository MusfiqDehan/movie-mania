import { useEffect } from 'react';
import "./App.css";
import searchIcon from "./search.svg"

const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${OMDB_API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies("Spiderman");
  }, [])


  return (
    <div className="app">
      <h1>MovieMania</h1>

      <div className='search'>
        <input
          placeholder='Search For Movies'
          value=""
          onChange={() => { }}
        />
      </div>
    </div>
  );
}

export default App;
