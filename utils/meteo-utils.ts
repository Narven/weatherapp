export const WEATHER_INTERPRATIONS: WeatherInterpertation[]=[
  {
    codes: [0],
    label: "Sunny",
    image: require("../assets/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Cloudy",
    image: require("../assets/clouds.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Rainy",
    image: require("../assets/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Snowy",
    image: require("../assets/snow.png"),
  },
  {
    codes: [95, 96, 99],
    label: "Thunderous",
    image: require("../assets/thunder.png"),
  },
];

export interface WeatherInterpertation {
  codes: number[],
  label: string,
  image: any,
}

export function getWeatherInterpertation(code: number): WeatherInterpertation|undefined {
  return WEATHER_INTERPRATIONS.find(interpertation => interpertation.codes.includes(code));
}

export const DAYS=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
