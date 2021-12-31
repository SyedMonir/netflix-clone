import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    const base_Url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);

    return (
        <div className='row'>
            <h1>{title}</h1>

            <div className="row_posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                                key={movie.id}
                                src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`} alt={movie.name}
                            />
                        )
                )}
            </div>
        </div>
    );
};

export default Row;