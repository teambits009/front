import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = ({search}) => {
  return (
      <div className="items-center w-[100%] flex relative">
        <FontAwesomeIcon className="absolute pl-[10px]" icon={faSearch} />
        <input
          className="bg-white w-[100%] border-zinc-500 rounded px-[40px] py-[5px] outline-none focus:border-[#015FF1] border"
          type="search"
          name="search"
          placeholder={search}
        />
      </div>
  );
};

export default Search;
