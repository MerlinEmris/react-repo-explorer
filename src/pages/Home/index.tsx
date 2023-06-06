import React from "react";

import SearchBar from "../../components/SearchBar";
import UserDetail from "../../components/user/UserDetail";
import RepositoryFetch from "../../components/repository/RepositoryFetch";
import UserToken from "../../components/user/UserToken";
import Pagination from "../../components/repository/Pagination";
import useUserStore from "../../store/user";

const Home: React.FC = () => {
  const token = useUserStore((state) => state.token);
  return (
    <div className="container">
      {token ? <UserDetail /> : <UserToken />}
      {token ? (
        <div>
          <SearchBar />
          <RepositoryFetch />
          <Pagination />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
