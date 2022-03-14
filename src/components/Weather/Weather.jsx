import React, {useState, useEffect} from 'react';
import * as S from './styles';
import { useParams } from 'react-router-dom';

export default function Weather() {
    const api = {
        key: "2f62d1d3c6132ab09c50ba986374b055",
        base: "https://api.openweathermap.org/data/2.5/",
      };
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const { cname } = useParams()

    useEffect(()=>{
      fetch(`${api.base}weather?q=${cname}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then(result => {
        setWeather(result);
        setQuery('')
        console.log(result)
      });
    },[cname])
  
    const search = (evt) => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then(result => {
            setWeather(result);
            setQuery('')
            console.log(result)
          });
      }
    };
  
    const dateBuilder = (d) => {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    };
  return (
   
    <div className= {(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' :'app')
    : 'app'}>
      <main>
        <S.SFDive className="search-box">
          <S.SFInput
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </S.SFDive>
        {(typeof weather.main != "undefined") ? (
          <div>
        <S.SFsuperiorDiv className="location-box">
          <S.SFDive className="location">{weather.name}, {weather.sys.country}</S.SFDive>
          <S.SFDive className="date">{dateBuilder(new Date())}</S.SFDive>
        </S.SFsuperiorDiv>
        <S.SFsuperiorDiv className="weather-box">
          <S.SFDive className="temp">{Math.round(weather.main.temp)}ºC</S.SFDive>
          <S.SFDive className="weather">{weather.weather[0].main}</S.SFDive>
        </S.SFsuperiorDiv>
        </div>
        ) : ('')}
      </main>
    </div>

    
  )
}
