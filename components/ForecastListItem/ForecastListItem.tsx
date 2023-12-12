import {View, Image, ImageURISource} from 'react-native';
import {Txt} from '../Txt/Txt';
import {style} from './ForecastListItem.style';

export interface ForecastListItemProps {
  image: ImageURISource,
  day: string,
  date: string,
  temperature: number,
}

export function ForecastListItem({ image, day, date, temperature}: ForecastListItemProps) {
  return (
    <View style={style.container}>
      <Image style={style.image} source={image} />
      <Txt style={style.day}>{day}</Txt>
      <Txt style={style.date}>{date}</Txt>
      <Txt style={style.temperature}>{temperature}°</Txt>
    </View>
  )
}
