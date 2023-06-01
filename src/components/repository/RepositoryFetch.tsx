import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  GET_REPOSITORIES,
  GET_USER_REPOSITORIES,
} from "../../apollo/repositories";
import useFilterStore from "../../stores/filter";
import useRepositoryStore from "../../stores/repository";
import RepositoryContainer from "./RepositoryContainer";

const RepositoryFetch: React.FC = () => {
  const searchTerm = useFilterStore((state) => state.searchTerm);
  const setRepos = useRepositoryStore((state) => state.setRepository);
  const [getRepos, status1] = useLazyQuery(GET_REPOSITORIES());
  const [getUserRepos, status2] = useLazyQuery(GET_USER_REPOSITORIES());
  useEffect(() => {
    if (searchTerm === "") {
      getUserRepos().then((response) => {
        console.log(response.data.viewer.repositories.nodes);
        setRepos(response.data.viewer.repositories.nodes);
      });
    } else {
      getRepos({
        variables: { query: `name:${searchTerm}`, type: "REPOSITORY" },
      }).then((response) => {
        setRepos(response.data.search.nodes);
      });
    }
  }, [searchTerm]);

  if (status1.loading || status2.loading) return <>loading ...</>;
  if (status1.error || status2.error) return <>error: {error.message}</>;
  return <RepositoryContainer />;
};

export default RepositoryFetch;
