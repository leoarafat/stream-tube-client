import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PlayMovie = () => {
    const movie = useLoaderData()
    console.log(movie);
    return (
        <div>
            movie playing
        </div>
    );
};

export default PlayMovie;