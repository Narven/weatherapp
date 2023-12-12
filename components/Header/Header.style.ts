import {StyleSheet} from 'react-native';

const BACK_BTN_WIDTH=30;

export const style=StyleSheet.create({
  backButton: {
    width: BACK_BTN_WIDTH,
  },
  container: {
    flexDirection: "row"
  },
  headerTxt: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  subtitle: {
    fontSize: 30,
  },
});
