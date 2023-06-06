import React from "react";
import { RepositoryDetail } from "../../types/store.types";

interface Props {
  data: RepositoryDetail;
}

const RepositoryDetail: React.FC<Props> = ({ data }) => {
  return (
    <div className="container">
      {/* <div>{data.id}</div> */}
      <div>Name: {data.name}</div>
      <div>Owner: {JSON.stringify(data.owner)}</div>
      <a target="_blank" href={data.url}>
        {data.url}
      </a>
      <div style={{ display: "flex" }}>
        Languages:
        {data.languages.nodes.map((lang) => (
          <div style={{ margin: "0 1em" }}> {lang.name} </div>
        ))}
      </div>
      <div>Stars: {data.stargazerCount}</div>
      <div>Last updated at: {data.updatedAt}</div>
    </div>
  );
};

export default RepositoryDetail;
