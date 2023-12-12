import {View} from 'react-native';
import {style} from './HomePage.style';
import {Txt} from '../components/Txt/Txt';
import {MeteoBasic} from '../components/MeteoBasic/MeteoBasic';
import {getWeatherInterpertation} from '../utils/meteo-utils';
import {MeteoAdvanced} from '../components/MeteoAdvanced/MeteoAdvanced';
import {SearchBar} from '../components/SearchBar/SearchBar';

interface CurrentWeather {
  interval: number,
  is_day: number,
  temperature: number,
  time: Date,
  weathercode: number,
  winddirection: number,
  windspeed: number
}

interface CurrentWeatherUnits {
  interval: "seconds",
  is_day: string,
  temperature: string, //"°C",
  time: string, // "iso8601",
  weathercode: string // "wmo code",
  winddirection: string, // "°",
  windspeed: string, // "km/h"
}

export interface CurrentWeatherDaily {
  sunrise: string[],
  sunset: string[],
  temperature_2m_max: number[],
  time: string[],
  weathercode: number[],
  windspeed_10m_max: number[],
}

interface CurrentWeatherDailyUnits {
  sunrise: "iso8601",
  sunset: "iso8601",
  temperature_2m_max: "°C",
  time: "iso8601",
  weathercode: "wmo code",
  windspeed_10m_max: "km/h",
}

export interface Weather {
  current_weather: CurrentWeather,
  current_weather_units: CurrentWeatherUnits,
  daily: CurrentWeatherDaily,
  daily_units: CurrentWeatherDailyUnits,
  elevation: number,
  generationtime_ms: number, // 0.12302398681640625,
  latitude: number,
  longitude:  number,
  timezone: string, // "Europe/London",
  timezone_abbreviation: string, // "GMT",
  utc_offset_seconds: number,
}

interface HomePageProps {
  weather: Weather,
  city: string,
  onSubmitSearch: any
}

export function HomePage({ weather, city, onSubmitSearch }: HomePageProps) {
  const w=weather.current_weather;
  const interpretation = getWeatherInterpertation(w.weathercode);
  return (
    <>
      <View style={style.meteo_basic}>
        <MeteoBasic
          city={city}
          weather={weather}
          interpretation={interpretation!}
          temperature={Math.round(w.temperature)} />
      </View>
      <View style={style.searchbar}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={style.meteo_advanced}>
        <MeteoAdvanced
          sunrise={weather.daily.sunrise[0].split('T')[1]}
          sunset={weather.daily.sunset[0].split('T')[1]}
          windspeed={weather.current_weather.windspeed} />
      </View>
    </>
  )
}
