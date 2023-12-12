import {Image, TouchableOpacity, View} from 'react-native';
import {Txt} from '../Txt/Txt';
import {style} from './MeteoBasic.style';
import {WeatherInterpertation} from '../../utils/meteo-utils';
import {Clock} from '../Clock/Clock';
import {useNavigation} from '@react-navigation/native';
import {Weather} from '../../pages/HomePage';

interface MeteoBasicProps {
  temperature: number,
  interpretation: WeatherInterpertation,
  city: string,
  weather: Weather
}

export function MeteoBasic({temperature, interpretation, city, weather}: MeteoBasicProps) {
  const nav = useNavigation();
  console.debug('weather', weather);
  return (
    <>
      <View style={style.clock}>
        <Clock />
      </View>
      <View style={style.city}>
        <Txt style={{fontSize: 60}}>{city}</Txt>
      </View>
      <View style={style.interpertation}>
        <Txt style={style.interpertation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={style.temperature_box}>
        <TouchableOpacity onPress={() => nav.navigate("Forecasts", { city, weather: weather.daily})}>
          <Txt style={style.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={style.image} source={interpretation.image}/>
      </View>
    </>
  );
}
