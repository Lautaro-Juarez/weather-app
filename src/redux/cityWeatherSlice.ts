import { City } from "@/models/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: City = {
  cityDataWeather: {
    name: "",
    weather: [
      {
        description: "",
        icon: "",
        id: 0,
        main: "",
      },
    ],
    wind: {
      speed: 0,
      deg: 0,
    },
    sys: {
      country: "",
      id: 0,
      sunrise: 0,
      sunset: 0,
    },
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  },
  forecast: [
    {
      icon: "",
      temperature: 0,
      wind_speed: 0,
      datatime: 0,
    },
  ],
};

export const cityWeatherSlice = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      const city: City = action.payload;
      state.cityDataWeather.main = city.cityDataWeather.main;
      state.cityDataWeather.wind = city.cityDataWeather.wind;
      state.cityDataWeather.sys = city.cityDataWeather.sys;
      state.cityDataWeather.name = city.cityDataWeather.name;
      state.cityDataWeather.weather = city.cityDataWeather.weather;
      state.forecast = city.forecast;
    }
  },
});

export const { changeCity } = cityWeatherSlice.actions;
export default cityWeatherSlice.reducer;
