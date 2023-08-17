import React, { useState } from 'react';
import Select from 'react-select';
import { useGamesListContext } from '../../contexts/GamesListContext';
import _debounce from 'lodash/debounce';

const Search = () => {
  const { setSearch, gamesList } = useGamesListContext();
  const [selectedOption, setSelectedOption] = useState(null);
  const debouncedSetSearch = _debounce((searchQuery) => {
    setSearch(searchQuery);
  }, 900);

  const groupedOptions = gamesList.map((game: any) => ({
    value: game.name,
    label: (
      <div className="flex items-center mb-2">
        <img
          className="h-[50px] rounded-md ml-1 mr-2"
          src={game.background_image}
          alt={game.name}
        />
        <span>{game.name}</span>
      </div>
    ),
    group: 'Games',
  }));

  const customStyles = {
    input: (provided: any) => ({
      ...provided,
      color: 'black',
      backgroundImage: 'url("../../assets/icons/search-icon.svg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '8px',
      border: 'none',
      borderRadius: '4px',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: 'pointer',
      padding: 0,
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'blue' : 'white',
      '&:hover': {
        backgroundColor: 'lightblue',
      },
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }),
  };

  const handleChange = (selected: any) => {
    setSelectedOption(selected);
    setSearch(selected.value);
  };

  return (
    <div className="group top-16 w-[60rem]">
      <Select
        options={groupedOptions}
        value={selectedOption}
        onChange={handleChange}
        onInputChange={(inputValue: string) => debouncedSetSearch(inputValue)}
        placeholder="Search..."
        styles={customStyles}
        isSearchable={true}
        isClearable={true}
      />
    </div>
  );
};

export default Search;
