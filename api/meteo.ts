import {Coords} from '../App';
import axios from 'axios';


export class MeteoAPI {
  static async fetchWeatherByCoord(coords: Coords) {
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
    const res=await axios.get(url);
    return res.data;
  }

  static async fetchCityByCoords(coords: Coords): Promise<string> {
    const url=`https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lng}&format=json`;
    const res=await axios.get(url);
    const {address: {city, village, town}}=res.data;
    return city||village||town;
  }

  static async fetchCoordsByCity(city: string) {
    try {
      const url=`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&format=json&accept-language=en`;
      const res=await axios.get(url);
      const {latitude: lat, longitude: lng}=res.data.results[0];
      return {lat, lng};
    } catch (e) {
      throw "Invalid city name."
    }
  }
}
