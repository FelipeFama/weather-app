import React from "react";
import { BiSearch } from "react-icons/bi";
import { ButtonSearch, InputSearch, Search } from "./styles";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch((event.target as HTMLInputElement).value);
    }
  };

  return (
    <Search>
      <InputSearch type="text" placeholder="Search" onKeyUp={handleSearch} />
      <ButtonSearch aria-label="button">
        <BiSearch />
      </ButtonSearch>
    </Search>
  );
};
