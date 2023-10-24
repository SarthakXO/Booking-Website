"use client";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SearchComponent = () => {
  const [searchbar, setSearchbar] = useState(false);
  const handleSearch = () => {
    setSearchbar(!searchbar);
    // console.log(searchbar);
  };

  return (
    <div className="flex gap-5 items-center duration-500 transition-all z-10 text-center">
      <BsSearch onClick={handleSearch} />
      {searchbar ? (
        <input
          className="bg-black  ease-in  text-red-500 duration-500 outline-none"
          placeholder="Search for hotels"
        />
      ) : (
        ""
      )}
    </div>
  );

  {
  }
};

export default SearchComponent;
