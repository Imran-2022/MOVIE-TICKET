import React, { useEffect, useState } from 'react';
import HomeData from './HomeData';

const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const url= "https://api.tvmaze.com/search/shows?q=all"
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            // console.log(data);
        })
    },[])
    return (
        <div className="home">
            <div className="homedata-in">
                {
                    data.map((dt,indx)=><HomeData key={indx} AllData={dt}/>)
                }
            </div>
        </div>
    );
};

export default Home;