{/*import React, { useState } from 'react';

const App = () => {
  const apiKey = 'a98ef77dc8a462b142772d10e4113ff8';
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setWeatherData(data);
          setCity("")
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  };

  return (
    <div className='flex flex-col justify-center items-center p-6'>
      <input
        className='w-full p-4 mr-auto border border-[black] rounded-md text-xl outline-none'
        placeholder='Enter The City :'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ?(
        <div>
          <p>welcome to weather app, enter in a city to get the weather of .</p>
        </div>
      ) :(
        <div className='flex flex-col mt-[100px] items-center'>
          <p className='text-3xl m-8 font-serif'>{weatherData.name}</p>
        <p className='text-[90px] p-[10px] border-black border rounded-md'>{Math.round(weatherData.main.temp)}°F</p>
          <p className='text-[30px] font-serif m-8  '>{weatherData.weather[0].main}</p>
        </div>
      )
      
      }
    </div>
  );
};

export default App;
*/}
import React, { useState } from 'react';
import { FaTemperatureHigh } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";

const WeatherDetail = ({ icon, value }) => (
  <div className="flex items-center justify-center">
    {icon}
    <p className="text-3xl m-8 font-serif font-bold">{value}</p>
  </div>
);

const App = () => {
  const apiKey = 'a98ef77dc8a462b142772d10e4113ff8';
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setWeatherData(data);
          setCity("");
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  };

  return (
    <div className='w-[500px] shadow-xl flex flex-col p-5 my-5 rounded-lg  items-center bg-purple-200 ml-[30%] hover:scale-105 duration-300 '>
      <div className='flex flex-col justify-center items-center p-6'>
        <input
          className='w-full p-4 mr-auto border border-[#8f27cb] rounded-xl text-xl outline-none shadow-lg bg-purple-100 hover:scale-105 duration-300'
          placeholder='Enter The City :'
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
        />

        {typeof weatherData.main === 'undefined' ? (
          <div className='justify-center items-center'>
            <p className='font-serif mt-4 '>welcome to weather app, enter in a city to get the weather.</p>
          </div>
        ) : (
          <div className=' text-center border border-[#8f27cb] rounded-md p-4 my-4 w-[400px] mx-auto bg-purple-100'>
            <div className="flex flex-col items-center justify-center">
              <WeatherDetail icon={<FaLocationDot size={50} />} value={weatherData.name} />
              <WeatherDetail icon={<FaTemperatureHigh size={50} className='-mt-1' />} value={`${Math.round(weatherData.main.temp)}°F`} />
              <WeatherDetail icon={<TiWeatherCloudy size={60} />} value={weatherData.weather[0].main} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
