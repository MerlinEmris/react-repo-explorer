import React from "react";
import { Repository } from "../../models";

interface Props {
  data: Repository;
}

const RepositoryCard: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ padding: "10px 8px 10px 8px", width: "30%" }}>
      <div>id:{data.id}</div>
      <div>name: {data.name}</div>
      <div>url: {data.url}</div>
      <div>stars: {data.stargazerCount}</div>
      <div>updated at: {data.updatedAt}</div>
    </div>
  );
};

export default RepositoryCard;
