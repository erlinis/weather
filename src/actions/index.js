import axios from 'axios';

const API_KEY = 'ea61204fc606fdb5bbd581eb8c1617d6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const COUNTRY_CODE = 'us';
  const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
  const request =  axios.get(url);

  console.log('request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
