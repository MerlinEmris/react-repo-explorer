import React from "react";
import useRepositoryStore from "../../stores/repository";
import RepositoryCard from "./RepositoryCard";

const RepositoryContainer: React.FC = () => {
  const repos = useRepositoryStore((state) => state.repositories);
  return (
    <>
      {repos.map((repo) => (
        <RepositoryCard data={repo} key={repo.id} />
      ))}
    </>
  );
};

export default RepositoryContainer;
