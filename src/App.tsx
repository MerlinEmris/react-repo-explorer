import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import UserDetail from "./components/UserDetail";
import RepositoryFetch from "./components/repository/RepositoryFetch";

const App: React.FC = () => {
  return (
    <>
      <div>
        <UserDetail />
      </div>
      <SearchBar />
      <RepositoryFetch />
    </>
  );
};

export default App;
