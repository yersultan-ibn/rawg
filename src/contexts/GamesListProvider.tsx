import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getGamesList } from '../services/rawg-service';

interface GamesListContextData {
  gamesList: any[];
  loading: boolean;
  error: any;
}

export const GamesListContext = createContext<GamesListContextData>({} as GamesListContextData);

export const useGamesListContext = () => {
  return useContext(GamesListContext);
};

export const GamesListProvider = ({ children }: any) => {
  const [gamesList, setGamesList] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getGamesList();
      setGamesList(data);
      setLoading(false);
      // setMiniLoading(false);
    })();
  }, []);

  const contextValue = {
    gamesList,
    loading,
    error,
  };

  return <GamesListContext.Provider value={contextValue}>{children}</GamesListContext.Provider>;
};
