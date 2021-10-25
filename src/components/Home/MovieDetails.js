import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ModalForm from './ModalForm';

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
        <div className="movieDetails">
            <div className="movieDetails-in">
                {
                    movie.map(mv => {
                        return (
                            <div className="movieDetailss-inn">
                                <img className="detailsImg" src={mv.show.image.medium} alt="" />
                                <div className="df">
                                    <h3> Movie - {mv.show.name}</h3>
                                    <h4>Type - {mv.show.type}</h4>

                                </div>
                                <div className="df">
                                    <h4>Language - {mv.show.language}</h4>

                                    <h4>schedule - {mv.show?.schedule?.days[0]}</h4>
                                </div>
                                <h6 className="p-3"> Summary - {mv.show.summary}</h6>
                                <button onClick={() => setIsOpen(true)} className="btn btn-primary w-100 mx-3">Buy Ticket Now</button>
                                <ModalForm modalIsOpen={modalIsOpen} movie={mv.show.name} schedule={mv.show?.schedule?.days[0]} closeModal={closeModal} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default MovieDetails;