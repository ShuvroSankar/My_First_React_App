import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=e021cdd8'
const movie1 = {
    'Poster': "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title": "Batman v Superman: Dawn of Justice",
    "Type"  :"movie",
    "Year":"2016",
    "imdbID":"tt2975590"
}

const App = () => {
    const [movies,setmovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search);

    }
    useEffect(() => {
        searchMovies('Porn')

    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    value = {searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length>0
                ? (
                    <div className="container">
                        {movies.map(movie=>(
                            <MovieCard movie = {movie}/>
                        ))} 
                    </div>

                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>

                    </div>
                )}
            
        </div>
    );
}

export default App;