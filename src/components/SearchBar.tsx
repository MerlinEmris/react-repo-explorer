import React, { useEffect, useRef } from "react";

import useFilterStore from "../store/filter";
import useRepositoryStore from "../store/repository";

const SearchBar: React.FC = () => {
  const searchTerm = useFilterStore((state) => state.searchTerm);
  const setSearchTerm = useFilterStore((state) => state.setSearchTerm);
  const setFilterValues = useFilterStore((state) => state.setOrAddFilterValue);
  const setCurrentPageNumber = useRepositoryStore(
    (state) => state.setCurrentPageNumber
  );

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.value = searchTerm;
    }
  }, []);
  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPageNumber(0);
    if (e.target.value == "") {
      setFilterValues({ name: "query", value: "user:@me" });
    } else {
      setFilterValues({ name: "query", value: `name:${e.target.value}` });
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "600px",
            minWidth: "300px",
            height: "40px",
            fontSize: "28px",
          }}
          name="search"
          ref={ref}
          onChange={handleSearchBarChange}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;
