export interface City {
  cityDataWeather : CityDataWeather
  forecast: CityHourly[];
}
export interface CityHourly {
  icon: string;
  temperature: number;
  wind_speed: number;
  datatime: number;
}

export interface CityDataWeather {
    name: string;
    weather: [
      {
        description: string;
        icon: string;
        id: number;
        main: string;
      }
    ];
    wind: {
      speed: number;
      deg: number;
    };
    sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset: number;
    };
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
}