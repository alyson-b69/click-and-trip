import React from "react";
import './FilterTrips.css'

function FilterTrips({ trips, currentfilter, onFilterChange }) {

    // Supprimer les doublons
    let cache = {};
    let regions = trips.filter(function(elem){
	return cache[elem.subregion]?0:cache[elem.subregion]=1;
    });

    // Ranger les valeurs par ordre alphabétique

    regions.sort(function compare(a, b) {
        if (a.subregion < b.subregion)
           return -1;
        if (a.subregion > b.subregion )
           return 1;
        return 0;
      });

    // Placer les valeurs des regions dans un tableau regionOptions pour pouvoir les afficher
    let regionOptions = regions.map(trip => (
        <option value={trip.subregion}>{trip.subregion}</option>
      ));


      //fonction handleChange 

return (
    <label>
        Pick your favorite Region : 
        <select onChange={(el)=> {
            console.log(el.target.value)
            onFilterChange(el.target.value)
        }}>
        <option value="All">All</option>
          {regionOptions}
        </select>

      </label>
)

}

export default FilterTrips;