import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getGamesList } from '../services/rawg-service';

interface GamesListContextData {
  gamesList: any[];
  loading: boolean;
  error: any;
  setPageSize: any;
  miniLoading: boolean;
}

export const GamesListContext = createContext<GamesListContextData>({} as GamesListContextData);

export const useGamesListContext = () => {
  return useContext(GamesListContext);
};

export const GamesListProvider = ({ children }: any) => {
  const [order, setOrderParam] = useState('-rating');
  const [gamesList, setGamesList] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);
  const [miniLoading, setMiniLoading] = useState(false);
  const [pageSize, setPageSizeParam] = useState(15);

  const setOrder = (param: any) => {
    setOrderParam(param);
    setLoading(true);
    setPageSizeParam(15);
  };

  const setPageSize = () => {
    setPageSizeParam(pageSize + 6);
    setMiniLoading(true);
  };

  useEffect(() => {
    (async () => {
      const filterParam = {
        page_size: pageSize,
        ordering: order,
      };

      const data = await getGamesList(filterParam);
      setGamesList(data);
      setLoading(false);
      setMiniLoading(false);
    })();
  }, [order, pageSize]);

  const contextValue = {
    gamesList,
    loading,
    error,
    miniLoading,
    setPageSize,
    setOrder,
  };

  return <GamesListContext.Provider value={contextValue}>{children}</GamesListContext.Provider>;
};
