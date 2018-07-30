import axios from 'axios';
import { FETCH_WEATHER } from 'actions/types';
import keys from 'config/keys';

export function fetchWeather(city) {
  const url = `${keys.openWeatherMapUrl}?appid=${
    keys.openWeatherMapApiKey
  }&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
