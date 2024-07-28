import { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=eb16a288c52610bbe4d9cc3cedee5656`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then(res => {
        setData(res.data);
      })
      setLocation("");
    }

  }

  return (
    <>
      <div className="app">
        <h1>Погода</h1>
        <div className="search">
          <input type="text" placeholder="Введите город" 
          value={location} 
          onChange={e=>setLocation(e.target.value)}
          onKeyDown={searchLocation}/>
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
              {data.sys ? <p>{data.sys.country}</p> : null}
            </div>
            <div className="temp">
              {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            </div>
            <div className="desc">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>По ощущениям</p>
            </div>
            <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Влажность</p>
            </div>
            <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed(1)} м/c</p> : null}
              <p>Скорость ветра</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
