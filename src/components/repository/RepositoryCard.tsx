import React from "react";
import { Repository } from "../../models";

interface Props {
  data: Repository;
}

const RepositoryCard: React.FC<Props> = (props) => {
  return <div>{JSON.stringify(props.data.name)}</div>;
};

export default RepositoryCard;
