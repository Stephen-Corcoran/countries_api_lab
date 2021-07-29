import React from 'react';

const Information = ({population, flag}) => {

    return(
        <>
        <h3>Population: {population}</h3>
        <img src={flag} width="250px"/>
        <button>Fav</button>
        </>
    )
}

export default Information;