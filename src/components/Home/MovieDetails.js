import React from 'react';
import { useParams } from 'react-router';

const MovieDetails = () => {
    const {idd}=useParams()
    console.log(idd);
    return (
        <div>
            <p>details of the id :{idd}</p>
        </div>
    );
};

export default MovieDetails;