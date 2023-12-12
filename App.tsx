import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {HomePage} from './pages/HomePage';
import { style} from './App.style';
import {Alert, ImageBackground, Text} from 'react-native';
// @ts-ignore
import backgroundImage from './assets/background.png';
import {useEffect, useState} from 'react';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import {MeteoAPI} from './api/meteo';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {ForecastPage} from './pages/ForecastPage/ForecastPage';

const Stack = createNativeStackNavigator();

export interface Coords {
  lat: number,
  lng: number,
}

export default function App() {
  const [isFontLoaded] = useFonts({
    'Alata-Regular': require('./assets/Alata-Regular.ttf'),
  });

  const [coordinates, setCoordinates ] = useState<Coords>();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");

  useEffect(() => {
    getUserCoordinations();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coordinates: Coords) {
    const weather = await MeteoAPI.fetchWeatherByCoord(coordinates);
    setWeather(weather);
  }

  async function fetchCityByCoords(coords: Coords) {
    const city = await MeteoAPI.fetchCityByCoords(coords);
    setCity(city);
  }

  async function getUserCoordinations() {
    const {status} = await requestForegroundPermissionsAsync();
    if(status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({lat: location.coords.latitude, lng: location.coords.longitude});
    } else {
      setCoordinates({lat: 51.43990311858737 , lng: -0.3771555147840165});
    }
  }

  async function fetchCoordsByCity(city: string) {
    try {
      const coords=await MeteoAPI.fetchCoordsByCity(city);
      setCoordinates(coords)
    } catch(e: any) {
      Alert.alert("Ups!", e.toString());
    }
  }

  const navTheme = {
    colors: {
      background: "transparent",
      primary: "",
      card: "",
      text: "",
      border: "",
      notification: ""
    },
    dark: false
  }

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={style.image}
        style={style.background}
        source={backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
            {weather&&
              <Stack.Navigator
                screenOptions={{ headerShown: false, animation: "fade" }}
                initialRouteName="Home">
                <Stack.Screen name="Home">
                  {() => <HomePage weather={weather} city={city} onSubmitSearch={fetchCoordsByCity} />}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={ForecastPage} />
              </Stack.Navigator>
            }
        </SafeAreaView>
      </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
