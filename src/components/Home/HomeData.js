import React from 'react';
import { Link } from 'react-router-dom';

const HomeData = ({ AllData }) => {
    console.log(AllData);
    const nam = AllData.show.name;
    const image = AllData.show.image.medium;
    const id = AllData.show.id
    return (
                <div className="homedata">
                    <img className="w-100 h-25" src={image} alt="" />
                    <div className="p-3">
                    <h4>{nam}</h4>
                    <button className="btn btn-primary w-50"><Link className="text-link" to={`/movieDetails/${id}`}>Details Here</Link></button>
                    </div>
                </div>
    );
};

export default HomeData;