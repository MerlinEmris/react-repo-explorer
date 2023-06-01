import React from "react";
import useRepositoryStore from "../../stores/repository";
import RepositoryCard from "./RepositoryCard";

const RepositoryContainer: React.FC = () => {
  const repos = useRepositoryStore((state) => state.repositories);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {repos.map((repo) => (
          <RepositoryCard data={repo} key={repo.id} />
        ))}
      </div>
    </>
  );
};

export default RepositoryContainer;
