import {View} from 'react-native';
import {style} from './MeteoAdvanced.style';
import {Txt} from '../Txt/Txt';


interface MeteoAdvancedProps {
  sunrise: any,
  sunset: any,
  windspeed: any,
}

export function MeteoAdvanced({sunrise, sunset, windspeed}: MeteoAdvancedProps) {
  return (
    <View style={style.container}>
      <StyleContainer>
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel>Sunsire</StyledLabel>
      </StyleContainer>
      <StyleContainer>
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyleContainer>
      <StyleContainer>
        <StyledValue>{windspeed}</StyledValue>
        <StyledLabel>WindSpeed</StyledLabel>
      </StyleContainer>
    </View>
  );
}

export function StyleContainer({children}: any) {
  return <View style={{alignItems: "center"}}>{children}</View>;
}

export function StyledLabel({children}: any) {
  return <Txt style={{fontSize: 15}}>{children}</Txt>;
}

export function StyledValue({children}: any) {
  return <Txt style={{fontSize: 20}}>{children}</Txt>;
}
