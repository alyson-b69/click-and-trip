import React from "react";
import './DisplayTrips.css'

function DisplayTrips({ details }) {


  return (
     
      <ul className="DisplayTrips" key={details.name} >
      <li><h2>{details.name}</h2></li>
      <div className="flag" style={{ backgroundImage: `url('${details.flag}')` }}></div>
      <li>Capitale : {details.capital}</li>
      <li>Region : {details.subregion}</li>
      <li>Language : {details.languages[0].name} </li> 
      <li>Population : {details.population.toLocaleString()} </li>
      <li>Monnaie : {details.currencies[0].name}</li>
    </ul>

  );
}

export default DisplayTrips;
