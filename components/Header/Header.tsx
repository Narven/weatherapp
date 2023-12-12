import {TouchableOpacity, View, Text} from 'react-native';
import {Txt} from '../Txt/Txt';
import {useNavigation} from '@react-navigation/native';
import{style} from './Header.style';

export interface HeaderProps {
  city: string
}

export function Header({ city } : HeaderProps) {
  const nav = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.backButton} onPress={nav.goBack}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View>
        <Txt style={style.headerTxt}>{city.toUpperCase()}</Txt>
        <Txt style={style.subtitle}>7 days forecasts</Txt>
      </View>
    </View>
  )
}
