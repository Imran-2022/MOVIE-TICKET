import React from 'react';
import { Link } from 'react-router-dom';
import { MdFlightTakeoff } from "react-icons/md";
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
                   <Link className="text-link" to={`/movieDetails/${id}`}> <button onClick={()=>window.scrollTo(0, 0)} className="btn btn-primary  w-50">Details Here <MdFlightTakeoff /></button></Link>
                    </div>
                </div>
    );
};

export default HomeData;