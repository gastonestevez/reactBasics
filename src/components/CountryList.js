import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const CountryList = ({loading,country,setCountryDetails}) => {
    return (
        <div>
            {loading ?
                <Spinner animation="border" variant="dark" /> :
                country.map( (pais,index) =>
                    <div key={index}>
                        <Button variant={'dark'} onClick={()=>setCountryDetails(pais)} className={'paises'} >
                            {pais.name}
                        </Button>
                    </div>)
            }
        </div>
    );
};

export default CountryList;
