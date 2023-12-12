import {Text, useWindowDimensions} from 'react-native';
import {s} from './Txt.style';

interface TxtProps {
  children?: any,
  style?: any,
  restProps?: any,
}

export function Txt({children, style, ...restProps}: TxtProps) {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions()
  const iphone13Ratio = 1 / height;
  return (
    <Text
      style={
        [
          s.txt,
          style,
          {fontSize: Math.round(fontSize * iphone13Ratio * height)}
        ]
      } {...restProps}>
        {children}
    </Text>
  );
}
