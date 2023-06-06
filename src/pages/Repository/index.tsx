import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import RepositoryDetail from "../../components/repository/RepositoryDetail";
import { GET_REPOSITORY_DETIAL } from "../../api/apollo/repositories";
import { RepositoryDetail as RepoDetailType } from "../../types/store.types";

const Respository: React.FC = () => {
  const { id } = useParams();
  const [repoDetail, setRepoDetail] = useState<RepoDetailType | null>(null);
  const [getRepoDetail, { error, loading }] = useLazyQuery(
    GET_REPOSITORY_DETIAL()
  );
  useEffect(() => {
    getRepoDetail({
      variables: { id: id },
    }).then((response) => {
      setRepoDetail(response.data.node);
    });
  }, [id]);
  if (loading) return <>loading...</>;
  if (error) return <>error: {error.message}</>;
  return <div>{repoDetail && <RepositoryDetail data={repoDetail} />}</div>;
};

export default Respository;
