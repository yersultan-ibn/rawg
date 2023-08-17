import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getGamesList } from '../services/rawg-service';

interface GamesListContextData {
  gamesList: any[];
  loading: boolean;
  error: any;
  setPageSize: any;
  miniLoading: boolean;
  setSearch: any;
}

export const GamesListContext = createContext<GamesListContextData>({} as GamesListContextData);

export const useGamesListContext = () => {
  return useContext(GamesListContext);
};

export const GamesListProvider = ({ children }: any) => {
  const [order, setOrderParam] = useState('-rating');
  const [searchTerm, setSearchTerm] = useState('');
  const [gamesList, setGamesList] = useState<any>([]);
  const [creatorsList, setCreatorsList] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);
  const [miniLoading, setMiniLoading] = useState(false);
  const [pageSize, setPageSizeParam] = useState(15);

  const setOrder = (param: any) => {
    setOrderParam(param);
    setLoading(true);
    setPageSizeParam(15);
  };

  const setSearch = (param: any) => {
    setSearchTerm(param);
    setLoading(true);
    setPageSizeParam(15);
  };

  const setPageSize = () => {
    setPageSizeParam(pageSize + 6);
    setMiniLoading(true);
  };

  useEffect(() => {
    const filterParam = {
      page_size: pageSize,
      ordering: order,
      search: searchTerm,
    };
    (async () => {
      const data = await getGamesList(filterParam);
      setGamesList(data);
      setLoading(false);
      setMiniLoading(false);
    })();
  }, [order, searchTerm, pageSize]);

  const contextValue = {
    gamesList,
    loading,
    error,
    miniLoading,
    setPageSize,
    setOrder,
    setSearch,
  };

  return <GamesListContext.Provider value={contextValue}>{children}</GamesListContext.Provider>;
};
