import { useContext } from 'react';
import styles from './Card.module.css';
import { FavData, FavouritesContext } from '../context/FavouritesContext';
import { WeatherIcons } from '@/components/WeatherIcons';

const Component = ({ name, temp, icon }: FavData) => {

    const { deleteFromFavourites } = useContext(FavouritesContext)

    return (
        <article className={`${styles.city_card} flex_center`} >
            <div className={styles.text}>
                <p>{name}</p>
                <p>{(temp - 273.15).toFixed()}°c</p>
            </div>
            <figure className={styles.icon}>
                <img src={WeatherIcons(icon)} alt="A weather's icon" />
            </figure>
            <span onClick={() => deleteFromFavourites(name)} className={styles.delete_fav}>Tap to delete</span>
        </article>
    )

}
const FavouritesList = () => {

    const { favData } = useContext(FavouritesContext)

    return (
        <>
            {favData?.map((fav, i) => <Component name={fav.name} icon={fav.icon} temp={fav.temp} key={i} />)}
        </>
    )
}

export default FavouritesList
