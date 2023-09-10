import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags}) => {

    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }


    // const passWithParams = () => handleVisitedCountry(country)


    return (
        <div className={`country ${visited && 'visited'}`}>
            <img style={{ width: '150px' }} src={flags.png} alt="" />
            <h3 style={{ color: visited ? 'purple' : 'black' }}>{name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}m3</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
        </div>
    )
}

export default Country;