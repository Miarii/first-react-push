import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    const { name, capital, population, flags, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)     
    }

    // const passWithParams = () => handleVisitedCountry(country)
    // use arrway function to wrap the function in the button if you want to pass the parameter


    // console.log(handleVisitedCountry);
    // console.log(country);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name.common}</h3>
            <h4>Capital: {capital}</h4>
            <h4>Area: {area}</h4>
            <h4>Population: {population}</h4>
            <img className='img-container' src={flags.png} alt="" />
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark visited: </button>
            <button onClick={handleVisited}>{visited ? 'visited' : 'visit'}</button>
            {visited ? 'i have visited this country' : 'i want to visit'}
        </div>
    );
};

export default Country;