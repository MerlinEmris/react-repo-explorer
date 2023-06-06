import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  GET_REPOSITORIES,
  GET_STARTCURSOR,
} from "../../api/apollo/repositories";
import useFilterStore from "../../store/filter";
import useRepositoryStore from "../../store/repository";
import RepositoryContainer from "./RepositoryContainer";
import { Filter, Pagination as Ptype } from "../../types/store.types";

const RepositoryFetch: React.FC = () => {
  const filterValues = useFilterStore((state) => state.filterValues);

  const setRepos = useRepositoryStore((state) => state.setRepository);
  const setPageInfo = useRepositoryStore((state) => state.setPageInfo);
  // const pageInfo = useRepositoryStore((state) => state.pageInfo);
  const currentPageNumber = useRepositoryStore(
    (state) => state.currentPageNumber
  );
  const setRepositoryCount = useRepositoryStore(
    (state) => state.setRepositoryCount
  );
  const [getRepos, { loading, error }] = useLazyQuery(GET_REPOSITORIES());
  const [getPaginationData] = useLazyQuery(GET_STARTCURSOR());
  const doneTypingInterval = 1000 * 1;

  const serializeFilterData = (filterValues: Filter[]) =>
    Object.fromEntries(
      filterValues.map((value) =>
        Object.entries(value).reduce((prev, next) => [prev[1], next[1]])
      )
    );

  const fetchPaginationData = async () => {
    const variables = serializeFilterData(filterValues);
    return await getPaginationData({
      variables: { ...variables, startIndex: currentPageNumber * 10 },
    });
  };

  const fetchRepositories = async (pageInfo: Ptype) => {
    const variables = {
      ...serializeFilterData(filterValues),
      after: pageInfo.endCursor,
    };
    return await getRepos({
      variables: variables,
    });
  };

  const getReposFromGitHub = () => {
    fetchPaginationData().then((response) => {
      setPageInfo(response.data.search.pageInfo);
      setRepositoryCount(response.data.search.repositoryCount);
      fetchRepositories(response.data.search.pageInfo).then((response) => {
        setRepos(response.data.search.nodes);
      });
    });
  };

  useEffect(() => {
    const typingTimer = setTimeout(getReposFromGitHub, doneTypingInterval);
    return () => {
      clearInterval(typingTimer);
    };
  }, [filterValues, currentPageNumber]);

  if (loading) return <>loading ...</>;
  if (error) return <>error: {error.message}</>;
  return (
    <>
      <RepositoryContainer />
    </>
  );
};

export default RepositoryFetch;
