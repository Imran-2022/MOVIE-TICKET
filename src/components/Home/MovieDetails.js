import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ModalForm from './ModalForm';
import { MdFlightTakeoff } from "react-icons/md";
const MovieDetails = () => {
    const { idd } = useParams()
    const [movie, setMovie] = useState([])
    useEffect(() => {
        const url = "https://api.tvmaze.com/search/shows?q=all"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const movie = data.filter(x => x?.show?.id == idd)
                setMovie(movie)
            })
    }, [])

    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="movieDetails mt-3">
            <div className="movieDetails-in">
                {
                    movie.map(mv => {
                        return (
                            <div className="movieDetailss-inn">
                                <div className="imgdiv">
                                    <img className="detailsImg" src={mv.show.image.medium} alt="" />
                                </div>
                                <div className="details">                                  
                                        <h3> Movie - {mv.show?.name}</h3>
                                        <h4>Type - {mv.show?.type}</h4>
                                        <h4>Language - {mv.show?.language}</h4>
                                        <h4>runtime - {mv.show?.runtime}</h4>
                                        <h4>schedule - {mv.show?.schedule?.days[0]}</h4>
                                        <h4>time - {mv.show?.schedule?.time}</h4>
                                        <h4>rating - {mv.show?.rating?.average}</h4>
                                        <h4>officialSite - {mv.show?.officialSite}</h4>
                                    <h6 className="py-2"> Summary - {mv.show.summary}</h6>
                                    <button onClick={() => setIsOpen(true)} className="btn btn-primary w-100">Buy Ticket Now <MdFlightTakeoff /></button>
                                    <ModalForm modalIsOpen={modalIsOpen} movie={mv.show.name} schedule={mv.show?.schedule?.days[0]} time={mv.show?.schedule?.time} closeModal={closeModal} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default MovieDetails;