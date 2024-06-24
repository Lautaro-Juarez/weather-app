import { changeCity } from '@/redux/cityWeatherSlice';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import {fetchApiWeather} from '@/services/fetchApiWeather';
import { FormEventHandler } from 'react';

const SearchBar = () => {
	const dispatch = useDispatch()

	const handleSubmit:FormEventHandler = (e) => {
		const { target } = e
		e?.preventDefault()
		try {
			const getCityData = async () => {
				const getData = await fetchApiWeather(target[0].value)

				 dispatch(changeCity(getData)) 
			}
			getCityData()
		}
		catch (error) {
			console.log("something was wrong!!1");
		}
	}

	return (
		<section className={styles.search_bar}>
			<form onSubmit={handleSubmit} className={`${styles.form} flex_center`}>
				<input type="text"
					placeholder='Search a city...'
					className={styles.input}
				/>
				<i className="ri-search-line"></i>
			</form>
		</section>
	);
};

export default SearchBar;
