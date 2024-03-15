import React, { useEffect, useState } from 'react';
import "./assets/morning.jpg"
import "../src/App.css"
import Card from "./components/Card.jsx"
import Navbar from './components/Navbar.jsx';
import axios from 'axios';

const App = () => {

  const [state, setstate] = useState({ temprature: '0', feels: '0', humidity: '0', wind: '0', sunset:'', sunrise:'', city: 'karachi' })

  useEffect(() => {
    axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
      params: { city: `${state.city}` },
      headers: {
        'X-RapidAPI-Key': 'f9a1e48373msh92fd8b58e06b224p1ef64djsne0c7219c89a5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    })
      .then(response => {
        console.log(response.data);
        const data = response.data
        setstate((prevstate) => ({
          ...prevstate,
          temprature: data.temp,
          feels: data.feels_like,
          humidity: data.humidity,
          wind: data.wind_speed,
          sunset: data.sunset,
          sunrise: data.sunrise
        }))

      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  const [text, settext] = useState('')

  const textchange = (e) => {
    settext(e.target.value)
  }

  const search = (event) => {

    event.preventDefault();
    const city = text;

    axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
      params: { city: `${text}` },
      headers: {
        'X-RapidAPI-Key': 'f9a1e48373msh92fd8b58e06b224p1ef64djsne0c7219c89a5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    })
      .then(response => {
        console.log(response.data);
        const data = response.data
        setstate((prevstate) => ({
          ...prevstate,
          temprature: data.temp,
          feels: data.feels_like,
          humidity: data.humidity,
          wind: data.wind_speed,
          city: city,
          sunset: data.sunset,
          sunrise: data.sunrise
        }))

      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <>
      <Navbar />
      <Card temp={state.temprature} feel={state.feels} humidity={state.humidity} wind={state.wind} search={search} text={textchange} sunrise={state.sunrise} sunset={state.sunset} city={state.city} />
    </>

  )
};

export default App;
