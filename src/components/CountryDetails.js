import React from 'react';
import './CountryDetails.css';

const CountryDetails = ({countryDetails}) => {
    return (
        <div>
            {countryDetails && (
                <div className={'cartel'}>
                    <p> <b>Capital: </b>{countryDetails.capital}</p>
                    <p> <b>Continente: </b>{countryDetails.region}</p>
                    <p> <b>Nacionalidad: </b>{countryDetails.demonym}</p>
                    <div>
                        <img src={countryDetails.flag} alt="flag"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryDetails;
