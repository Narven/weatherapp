import {RouteProp, useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import {Txt} from '../../components/Txt/Txt';
import {Header} from '../../components/Header/Header';
import {ForecastListItem} from '../../components/ForecastListItem/ForecastListItem';
import {DAYS, getWeatherInterpertation} from '../../utils/meteo-utils';
import {CurrentWeatherDaily} from '../HomePage';

type ParamList = {
  Data: {
    city: string,
    weather: CurrentWeatherDaily,
  }
}

export function ForecastPage() {
  const {params}=useRoute<RouteProp<ParamList, 'Data'>>();
  console.debug(params);

    const forecastList = (
      <View style={{marginTop: 50}}>
        {
          params.weather.time&&params.weather.time.map((time, index) => {
            const weatherCode = params.weather.weathercode[index];
            const image = getWeatherInterpertation(weatherCode)?.image;
            const temperature=params.weather.temperature_2m_max[index];
            const date = new Date(time);
            const dayOfTHeWeek = DAYS[date.getDay()];
            const formatedDate = date.toLocaleDateString('default', {
              day: 'numeric',
              month: 'numeric',
            })
            return <ForecastListItem
              key={time}
              image={image}
              day={dayOfTHeWeek}
              date={formatedDate}
              temperature={Number(temperature.toFixed(0))}
            />;
          })
        }
      </View>
    )

  return (
    <View>
      <Header city={params.city} />
      {forecastList}

    </View>
  );
}
