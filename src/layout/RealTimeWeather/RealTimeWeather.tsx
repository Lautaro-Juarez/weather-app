import { City, CityDataWeather } from '@/models/models';
import styles from './RealTimeWeather.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { timestampToTime } from '@/utils/timestampToTime';
import { changeCity } from '@/redux/cityWeatherSlice';
import currentPosition from './currentPosition';
import { WeatherIcons } from '@/components/WeatherIcons';
import { StoreState } from '@/redux/store';


const RealTimeWeather = () => {
	const dispatch = useDispatch()

	const { name, main, sys, weather, wind }: CityDataWeather = useSelector((state: StoreState) => state.cityWeather.cityDataWeather)

	useEffect(() => {
		currentPosition().then((data:any) => {
			const dataWeather:City = {
				cityDataWeather: data.cityDataWeather,
				forecast : data.forecast
			}
			dispatch(changeCity(dataWeather)) 
		})
	}, [])
	
	return (
		<section className={styles.real_time_weather}>
			<h3 className={styles.city}>{`${name}, ${sys.country}`}</h3>
			<div className={styles.weather_info_container}>
				<article className={`${styles.weather_info} flex_center`}>
					<h1 className={styles.temperature}>{(main?.temp - 273.15).toFixed()}°</h1>
					<h4 className={styles.sky}>{weather[0].main}</h4>
					<h3 className={styles.st}>{(main?.feels_like - 273.15).toFixed()}° st</h3>
					<span className={styles.humity}><p> Humity: {main?.humidity}%</p></span>
					<span className={styles.wind}><p> wind: {(wind?.speed * 1.6).toFixed()} km/h</p></span>
					<span className={styles.Chance_rain}><p>Rain Chance: 10%</p></span>
				</article>
				<aside className={`${styles.secondary} flex_center`}>
					<figure className={styles.image}>
							<img src={WeatherIcons(weather[0].main)} />
					</figure>
					<div className={`${styles.sun} flex_center`}>
					<p>Sunrise {timestampToTime(sys?.sunrise)}</p>
					<p>SunSet {timestampToTime(sys?.sunset)}</p>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default RealTimeWeather;
