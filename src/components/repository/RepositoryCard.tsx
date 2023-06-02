import React from "react";
import { Repository } from "../../types/store.types";

interface Props {
  data: Repository;
}

const RepositoryCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="repository-card">
      <div>id:{data.id}</div>
      <div>name: {data.name}</div>
      <div>url: {data.url}</div>
      <div>stars: {data.stargazerCount}</div>
      <div>updated at: {data.updatedAt}</div>
    </div>
  );
};

export default RepositoryCard;
