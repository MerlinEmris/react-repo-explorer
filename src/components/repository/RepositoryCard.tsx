import React from "react";
import { Repository } from "../../types/store.types";
import { Link } from "react-router-dom";

interface Props {
  data: Repository;
}

const RepositoryCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="repository-card">
      {/* <div>id:{data.id}</div> */}
      <Link to={`repo/${data.id}`}>
        <div>name: {data.name}</div>
      </Link>
      <div>
        <a target="_blank" href={data.url}>
          <div className="long-text">{data.url}</div>
        </a>
      </div>
      <div>stars: {data.stargazerCount}</div>
      <div>updated at: {data.updatedAt}</div>
    </div>
  );
};

export default RepositoryCard;
