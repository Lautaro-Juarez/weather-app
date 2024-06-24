import { useSelector } from 'react-redux';
import styles from './Card.module.css';
import { CityDataWeather } from '@/models/models';
import { useContext } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import { WeatherIcons } from '@/components/WeatherIcons';
import { StoreState } from '@/redux/store';

const Card = () => {
    const { name, main, weather }: CityDataWeather = useSelector((state: StoreState) => state.cityWeather.cityDataWeather);
    const { addToFavourites } = useContext(FavouritesContext);

    return (
        <article className={`${styles.city_card} flex_center`} >
            <div className={styles.text}>
                <p>{name}</p>
                <p>{(main?.temp - 273.15).toFixed()}°c</p>
            </div>
            <figure className={styles.icon}>
                <img src={WeatherIcons(weather[0].main)} alt="A weather's icon" />
            </figure>
            <span onClick={() =>addToFavourites(name, main.temp, weather[0].main)} className={styles.add_fav}>Tap to add</span>
        </article>
    );
};

export default Card;