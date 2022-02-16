import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaPhoto from "./NasaPhoto";
import Header from './Header';
import "./App.css";


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
    <div className="App">
            <p>
        
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header/>
      {data && <NasaPhoto photo={data}/>}

    </div>
  );
}

export default App;

// use this one https://api.nasa.gov/planetary/apod?api_key=TMChmbLKSEVbrI2jEhbaPB9UqSEjLopK1EcD2tcD
