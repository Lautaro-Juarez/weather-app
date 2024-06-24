import { createContext, useEffect, useState } from "react";

interface Context {
    addToFavourites: (name: string, temp: number, icon: string) => void
    favData: FavData[],
    resetFavourites: () => void,
    deleteFromFavourites: (id: string) => void
}

export type FavData = {
    name: string,
    temp: number,
    icon: string
}

export const FavouritesContext = createContext<Context>({} as Context);

export const FavouritesProvider = ({ children }: { children: JSX.Element }) => {
    const [favData, setFavData] = useState<FavData[]>([]);

    const getDataLocalStorage = () => {
        const data = JSON.parse(localStorage.getItem("FAVOURITES_CITY") || '[]');
        setFavData(data);
    };

    const addToFavourites = (name: string, temp: number, icon: string) => {
        const cityExists = favData?.some((city) => city.name === name)
        if (!cityExists) {
            const newFavourite: FavData = { name, temp, icon };
            const updatedFavData = [...favData, newFavourite];
            setFavData(updatedFavData);
            localStorage.setItem("FAVOURITES_CITY", JSON.stringify(updatedFavData));
        }
    };

    const deleteFromFavourites = (id: string) => {
        const newFav = favData.filter(fav => fav.name !== id)
        setFavData(newFav)
    }

    const resetFavourites = () => {
        localStorage.setItem("FAVOURITES_CITY", JSON.stringify([]))
        setFavData([])
    }
    useEffect(() => {
        getDataLocalStorage();
    }, []);

    return (
        <FavouritesContext.Provider value={{ favData, addToFavourites, resetFavourites, deleteFromFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
};