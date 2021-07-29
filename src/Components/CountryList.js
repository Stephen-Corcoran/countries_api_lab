import React from 'react';

const CountryList = function({handleSelectChange, countries}) {

    const totalPopulation = countries.reduce((total, country) => total + country.population, 0);

    const countryList = countries.map((country, index) => {
        return <option value={country.alpha3Code} key={index}>{country.name}</option>
    })

    return(

        <>
            <h2>Total Population: {totalPopulation}</h2>
            <select name="country" onChange={handleSelectChange}>
                <option selected disabled>Select A Country:</option>
                {countryList}
            </select>
        </>
    )
}

export default CountryList;