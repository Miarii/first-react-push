import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'
// import Country from "../country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to visited');
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>visited countries: {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        handleVisitedCountry={handleVisitedCountry}
                        key={country.cca3}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;