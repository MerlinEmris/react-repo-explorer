import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import UserDetail from "./components/user/UserDetail";
import RepositoryFetch from "./components/repository/RepositoryFetch";
import UserToken from "./components/user/UserToken";
import useUserStore from "./store/user";

const App: React.FC = () => {
  const token = useUserStore((state) => state.token);
  return (
    <div className="container">
      {token ? <UserDetail /> : <UserToken />}
      {token ? (
        <div>
          <SearchBar />
          <RepositoryFetch />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
