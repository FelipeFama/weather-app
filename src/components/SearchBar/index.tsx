import React from "react";
import { ButtonSearch, InputSearch, Search } from "./styles";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <>
      <Search>
        <InputSearch type="text" placeholder="Search" />
        <ButtonSearch>
          <BiSearch />
        </ButtonSearch>
      </Search>
    </>
  );
};
