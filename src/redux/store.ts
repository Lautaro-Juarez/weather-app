import { configureStore } from "@reduxjs/toolkit";
import cityWeatherSlice from "./cityWeatherSlice";
import { City} from "@/models/models";

export interface StoreState {
  cityWeather : City
}

export const store = configureStore({
  reducer: {
    cityWeather: cityWeatherSlice,
  },
});
