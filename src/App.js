import React from 'react';
import Main from './pages';
import {Switch,Route} from "react-router-dom";
import { NotFound } from 'http-errors';
import MovieDetails from './components/Home/MovieDetails';
import Navigation from './components/Navber';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Navigation />
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route  path="/home" component={Main}/>
      <Route  path="/movieDetails/:idd" component={MovieDetails}/>
      <Route  path="*" component={NotFound}/>
      
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
