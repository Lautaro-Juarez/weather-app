import { Suspense, lazy, useContext, useState } from 'react';
import styles from './Header.module.css';
import Card from './components/Card';
import { FavouritesContext } from './context/FavouritesContext';
import { useSelector } from 'react-redux';
import { StoreState } from '@/redux/store';

const FavouritesList = lazy(() => import('./components/FavouritesList'))

const Header = () => {
	const [active, setActive] = useState(false)
	const { resetFavourites, favData } = useContext(FavouritesContext)
	const { name } = useSelector((state: StoreState) => state.cityWeather.cityDataWeather)

	return (
		<header className={`${styles.header}`}>
			<span className={`${styles.icon} flex_center`} onClick={() => setActive(!active)}>
				+ Add new city
			</span>
			<Suspense fallback={<h3>Loading...</h3>}>
				<section className={`${styles.add_city} ${active ? styles.show : ''} `}>
					{favData.length > 0 && <span onClick={() => resetFavourites()} className={styles.reset}>Reset</span>}
					{favData?.some(fav => fav.name === name) ? '' : <Card />}
					<FavouritesList />
					<span onClick={() => setActive(!active)} className={styles.arrow}><i className="ri-arrow-left-line"></i></span>
				</section>
			</Suspense>
			<span className={styles.settings}>
				Settings
			</span>
		</header>
	);
};

export default Header;
