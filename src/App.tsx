import React from "react";
import "./App.css";
import useRepositoryStore from "./stores/repository";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "./apollo/repositories";

const App: React.FC = () => {
  const setRepos = useRepositoryStore((state) => state.setRepository);
  const repos = useRepositoryStore((state) => state.repositories);
  // const pageInfo = useRepositoryStore(state => state.pageInfo)

  const { loading, error, data } = useQuery(GET_REPOSITORIES("name: bazar"));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  setRepos(data.search.nodes);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        {/* <button>load any data</button> */}
        {repos.map((repo) => (
          <div key={repo.id}> {repo.url} </div>
        ))}
      </div>
    </>
  );
};

export default App;
