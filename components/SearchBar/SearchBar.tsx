import {TextInput} from 'react-native';
import {style} from './SearchBar.style';

type SearchBarProps = {
  onSubmit: (value: string) => {}
}

export function SearchBar({ onSubmit }: SearchBarProps) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={style.input}
      placeholder='Type a city...' />
  );
}
