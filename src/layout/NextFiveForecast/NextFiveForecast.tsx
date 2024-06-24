import { useState } from 'react';
import styles from './NextFiveForecast.module.css';
import { useSelector } from 'react-redux';

const NextFiveForecast = () => {
	const {list} = useSelector(state => state.cityWeather.forecast)

	
	const [active, setActive] = useState(false)

	return (
		<div className={styles.container}>
			<h2 onClick={() => setActive(!active)}>Look next five days <span>v</span></h2>
			{active && (
				<section className={styles.forecast}>
					<article className={styles.forecast_card}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quibusdam.
					</article>
					<article className={styles.forecast_card}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quibusdam.
					</article>
					<article className={styles.forecast_card}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quibusdam.
					</article>
					<article className={styles.forecast_card}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quibusdam.
					</article>
				</section>
			)}
		</div>
	);
}


export default NextFiveForecast;
