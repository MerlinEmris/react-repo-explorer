import React, { useEffect, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  GET_REPOSITORIES,
  GET_USER_REPOSITORIES,
} from "../../api/apollo/repositories";
import useFilterStore from "../../store/filter";
import useRepositoryStore from "../../store/repository";
import RepositoryContainer from "./RepositoryContainer";

const RepositoryFetch: React.FC = () => {
  const searchTerm = useFilterStore((state) => state.searchTerm);
  const setRepos = useRepositoryStore((state) => state.setRepository);
  const [getRepos, status1] = useLazyQuery(GET_REPOSITORIES());
  const [getUserRepos, status2] = useLazyQuery(GET_USER_REPOSITORIES());
  const doneTypingInterval = 1000 * 2;

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (searchTerm === "") {
        getUserRepos().then((response) => {
          console.log("user", response.data.viewer.repositories.nodes);
          setRepos(response.data.viewer.repositories.nodes);
        });
      } else {
        getRepos({
          variables: { query: `name:${searchTerm}`, type: "REPOSITORY" },
        }).then((response) => {
          console.log("search", response.data.search.nodes);
          setRepos(response.data.search.nodes);
        });
      }
    }, doneTypingInterval);
    return () => {
      clearInterval(typingTimer);
    };
  }, [searchTerm]);

  if (status1.loading || status2.loading) return <>loading ...</>;
  if (status1.error || status2.error) return <>error: {error.message}</>;
  return <RepositoryContainer />;
};

export default RepositoryFetch;
