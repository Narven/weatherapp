import {StyleSheet} from 'react-native';

export const style=StyleSheet.create({
  clock: {
    alignItems: "flex-end"
  },
  city: {
    // fontSize: 50,
  },
  interpertation: {
    alignSelf: "flex-end",
    transform: [{rotate: "-90deg"}],
  },
  interpertation_txt: {
    fontSize: 20,
    marginBottom: 20,
  },
  temperature_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temperature: {
    fontSize: 90,
  },
  image: {
    height: 90,
    width: 90,
  }
});
