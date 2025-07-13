import React, { createContext, useContext, useState, useEffect } from 'react';
import { getData, storeData } from '@/services/asyncStorage';

export type FavoritesContextType = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(null);
export const useFavoritesContext = () => useContext(FavoritesContext) as FavoritesContextType;

export const FavoritesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    getData('favorites').then((storedFavorites) => {
      if (storedFavorites) setFavorites(storedFavorites);
    });
  }, []);

  const addFavorite = async (id: string) => {
    setFavorites((prev) => {
      const updated = [...prev, id];
      storeData('favorites', updated);
      return updated;
    });
  };

  const removeFavorite = async (id: string) => {
    setFavorites((prev) => {
      const updated = prev.filter((favId) => favId !== id);
      storeData('favorites', updated);
      return updated;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const clearFavorites = async () => {
    setFavorites([]);
    await storeData('favorites', []);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}