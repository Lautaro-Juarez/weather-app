import { RealTimeWeather } from '../RealTimeWeather';
import { SearchBar } from '../SearchBar';
import {Forecast } from '../Forecast';
import styles from './LayOut.module.css';

const LayOut = () => {
	return (
		<main className={styles.layout}>
 			<SearchBar/>
			<RealTimeWeather/>
			<Forecast/>
 		</main>
	);
};

export default LayOut;
