import React, {useEffect, useState} from 'react';
import './App.css';
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import Spinner from "react-bootstrap/Spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
    const [country,setCountry] = useState(null);
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

    function loadCountryData (pais) {
        console.log(pais)
    }
    return (
    <Container>
        <Row>
            <Col>
                <h2>Países y sus detalles</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                {loading ?
                    <Spinner animation="border" variant="dark" /> :
                    country.map( (c,index) =>
                        <div key={index}>
                            <Button className={'paises'} >
                                {c.name}
                            </Button>
                        </div>)
                }
            </Col>
            <Col>
                <p> { }</p>
            </Col>
        </Row>


    </Container>
  );
}

export default App;
