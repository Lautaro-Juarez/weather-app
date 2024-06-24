import { City } from "@/models/models";

const API_KEY: string = "5d968856d476ac1b8cc04c5e0985ae9e";

const fetchApiWeather = async (city: string) => {
  //got latitude and longitude of city's name
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
  const data = await response.json();
  const { lat, lon } = data[0];
  //finish

  return await getFullWeather(lat, lon)
};

const getFullWeather = async (lat: number, lon: number) => {
  const getWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const cityDataWeather: City = await getWeather.json();

  const forecast = await getHourlyWeather(lat, lon);

  return { cityDataWeather, forecast };
};

const getHourlyWeather = async (lat: number, lon: number) => {
  const getData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const hourlyCityDataWeather = await getData.json();

  return hourlyCityDataWeather;
};

export { getFullWeather, fetchApiWeather, getHourlyWeather };
