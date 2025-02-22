import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaPhoto from "./NasaPhoto";
import Header from './Header';
import "./App.css";
import styled from "styled-components";


const BodyStyle = styled.div`
  background-color: ${props => props.theme.fourColor}
`;


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=TMChmbLKSEVbrI2jEhbaPB9UqSEjLopK1EcD2tcD')
    .then(res => {
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <BodyStyle className="App">

      <Header/>
      {data && <NasaPhoto photo={data}/>}

    </BodyStyle>
  );
}

export default App;

// use this one https://api.nasa.gov/planetary/apod?api_key=TMChmbLKSEVbrI2jEhbaPB9UqSEjLopK1EcD2tcD
