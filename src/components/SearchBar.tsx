import React, { useEffect, useRef } from "react";

import useFilterStore from "../store/filter";

const SearchBar: React.FC = () => {
  const searchTerm = useFilterStore((state) => state.searchTerm);
  const setSearchTerm = useFilterStore((state) => state.setSearchTerm);
  const setFilterValues = useFilterStore((state) => state.setOrAddFilterValue);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.value = searchTerm;
    }
  }, []);
  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value == "") {
      setFilterValues({ name: "query", value: "user:@me" });
    } else {
      setFilterValues({ name: "query", value: `name:${e.target.value}` });
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{
            width: "600px",
            minWidth: "320px",
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
