import React, {useEffect, useState} from 'react';
import './App.css';
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
    const [country,setCountry] = useState(null);
    const [countryDetails, setCountryDetails] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect( () =>
    {
        async function fetchData(){
            //Aca va la ruta de la API donde queremos comunicar.
            const response = await fetch('https://restcountries.eu/rest/v2/');
            const data = await response.json();
            setCountry(data);
            setLoading(false);
        }
        fetchData();
    },[]);

    return (
    <Container className={'container'}>
        <Row>
            <Col>
                <h2>Países y sus detalles</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <CountryList loading={loading} country={country} setCountryDetails={setCountryDetails}/>
            </Col>
            <Col>
                <CountryDetails countryDetails={countryDetails}/>
            </Col>
        </Row>


    </Container>
  );
}

export default App;
