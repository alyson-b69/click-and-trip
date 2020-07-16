import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayTrips from "./components/DisplayTrips";
import FilterTrips from "./components/FilterTrips"
import './App.css';

const App = () => {

   const [filter, setFilter] = useState("All");
   const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    const handleFilter = newF => {
      setFilter(newF);
    };

   
    useEffect(() => {
      axios.get('https://restcountries.eu/rest/v2/all')
          .then(res => {
              setCountries(res.data);
              setLoad(true);
          })
          .catch(err => {
              setError(err.message);
              setLoad(true)
          })
  }, []);
    
  if (load) {
    return (
      <div className="App">
       <h1>Around the World</h1>

       {error ? 
        <li>{error.message}</li> 
        : 
        <FilterTrips 
              trips={countries} 
              currentFilter={filter}
              onFilterChange={handleFilter}
              />
        }


         <div className="countryList">


 
        {error ? 
        <li>{error.message}</li> 
        : 
        countries
        .filter((country) => {
          if (filter === "All") {
            return country
          } else {
            return country.subregion === filter
          }
          
        }
        )
        .map((country) => <DisplayTrips details={country} />)
        }


    </div>
    </div>
    
    );
} else {
    return (
        <div>
            Loading...
        </div>
    );
}
};

    
//     return (
     
//       <div className="App">
//       <h1>Around the World</h1>
      
     
//       <div className="countryList">
//       {console.log(trips)}
      
//        {/* trips.map(trip => {
            
//               <DisplayTrips
//                 key={trip.name}
//                 details={trip}
//                 // onDelete={handleDelete}
//                 // onToggle={handleCheck}
//               />  
            
//           }) */}
      

//       </div>
   
     
//       </div>
//     );
  
//   }
// }

export default App;