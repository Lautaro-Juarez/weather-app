import { useSelector } from 'react-redux';
import styles from './Forecast.module.css';
import './slide.css'
import useEmblaCarousel from 'embla-carousel-react'
import { timestampToTime } from '@/utils/timestampToTime';
import { WeatherIcons } from '@/components/WeatherIcons';
import { CityDataWeather, CityHourly } from '@/models/models';


const Forecast = () => {
	const { list } = useSelector(state => state.cityWeather.forecast)

	const OPTIONS = { dragFree: true }

	const [emblaRef] = useEmblaCarousel(OPTIONS)

	return (
		<section className="embla">
			<h4 className={styles.hourly}>Forecast 24h</h4>
			<div className="embla__viewport" ref={emblaRef}>
				<ul className="embla__container">
					{list?.map((item:CityDataWeather, index:number) => {
						if (index < 8) {
							return (
								<li className={`embla__slide ${styles.item_forecast}`} key={index}>
									<div className="embla__slide__number">
										<img className={styles.icon} src={WeatherIcons(item.weather[0].main)} alt="" />
										<small className={styles.temp}>{(item?.main?.temp - 273.15).toFixed()}°</small>
										<span>{timestampToTime(item?.dt)}</span>
									</div>
								</li>
							)
						}
					})}
				</ul>
			</div>
		</section>
	)
};

export default Forecast;
