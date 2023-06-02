import React from "react";
import useRepositoryStore from "../../store/repository";
import RepositoryCard from "./RepositoryCard";

const RepositoryContainer: React.FC = () => {
  const repos = useRepositoryStore((state) => state.repositories);
  return (
    <>
      <div className="repository-container">
        {repos.map((repo) => (
          <RepositoryCard data={repo} key={repo.id} />
        ))}
      </div>
    </>
  );
};

export default RepositoryContainer;
