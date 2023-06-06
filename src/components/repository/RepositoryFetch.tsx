import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../../api/apollo/repositories";
import useFilterStore from "../../store/filter";
import useRepositoryStore from "../../store/repository";
import RepositoryContainer from "./RepositoryContainer";
import Pagination from "./Pagination";

const RepositoryFetch: React.FC = () => {
  const filterValues = useFilterStore((state) => state.filterValues);

  const setRepos = useRepositoryStore((state) => state.setRepository);
  const setPageInfo = useRepositoryStore((state) => state.setPageInfo);

  const [getRepos, { loading, error }] = useLazyQuery(GET_REPOSITORIES());
  const doneTypingInterval = 1000 * 2;

  const getReposFromGitHub = () => {
    const variables = Object.fromEntries(
      filterValues.map((value) =>
        Object.entries(value).reduce((prev, next) => [prev[1], next[1]])
      )
    );
    console.log(variables);
    getRepos({
      variables,
    }).then((response) => {
      setRepos(response.data.search.nodes);
      setPageInfo(response.data.search.pageInfo);
      console.log(response.data.search.pageInfo);
    });
  };

  useEffect(() => {
    const typingTimer = setTimeout(getReposFromGitHub, doneTypingInterval);
    return () => {
      clearInterval(typingTimer);
    };
  }, [filterValues, doneTypingInterval]);

  if (loading) return <>loading ...</>;
  if (error) return <>error: {error.message}</>;
  return (
    <>
      <RepositoryContainer />
      <Pagination />
    </>
  );
};

export default RepositoryFetch;
