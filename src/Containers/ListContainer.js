import React, {useEffect, useState} from 'react';
import CountryList from "../Components/CountryList";
import Information from "../Components/Information";

const ListContainer = () => {

    // get the countries from the API
    // store the countries, pass down their information
    // be able to select one, and pass down it's information
    // useEffect() 

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {getCountries();}, [])


    const getCountries = function() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(result => result.json())
        .then(countries => setCountries(countries))
    }

    
    const handleSelectChange = event => {
        const selected = countries.find(country => country.alpha3Code === event.target.value)
        console.log(selected.flag)
        setSelectedCountry(selected)
        
    }

    const displayInfo  = () => {
        if (selectedCountry !== null) {
            return (
                <Information population={selectedCountry.population} flag={selectedCountry.flag} alpha3={selectedCountry.alpha3Code} />
                    )
            }
        }

    return (
        <>
            <CountryList countries={countries} handleSelectChange={handleSelectChange} />
            {displayInfo()}
        </>
    )
}

export default ListContainer;