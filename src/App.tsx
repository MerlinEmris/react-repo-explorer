import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import UserDetail from "./components/user/UserDetail";
import RepositoryFetch from "./components/repository/RepositoryFetch";
import UserToken from "./components/user/UserToken";
import useUserStore from "./stores/user";

const App: React.FC = () => {
  const token = useUserStore((state) => state.token);
  return (
    <>
      <div>{token ? <UserDetail /> : <UserToken />}</div>
      {token ? (
        <div>
          <SearchBar />
          <RepositoryFetch />
        </div>
      ) : (
        <span>Need token to perform request!</span>
      )}
    </>
  );
};

export default App;
