import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
    const {idd}=useParams()
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        const url= "https://api.tvmaze.com/search/shows?q=all"
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            const movie = data.filter(x=>x?.show?.id==idd)
            setMovie(movie)
        })
    },[])
    return (
        <div>
            <div>
                {
                  movie.map(mv=>{
                      return (
                          <>
                          <img  src={mv.show.image.medium} alt="" />
                          <h2>{mv.show.name}</h2>
                          <h6>{mv.show.summary}</h6>
                          <button className="btn btn-primary w-50"><Link className="text-link" to={`/movieDetails/${idd}`}>Buy Ticket Now</Link></button>
                          </>
                      )
                  })
                }
            </div>
        </div>
    );
};

export default MovieDetails;