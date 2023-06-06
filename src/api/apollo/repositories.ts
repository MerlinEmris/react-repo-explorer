import { gql } from "@apollo/client";

export const GET_STARTCURSOR = () => {
  return gql`
    query GetStartCursor($query: String!, $startIndex: Int!) {
      search(first: $startIndex, type: REPOSITORY, query: $query) {
        pageInfo {
          startCursor
          hasNextPage
          endCursor
          hasPreviousPage
        }
        repositoryCount
      }
    }
  `;
};

export const GET_REPOSITORIES = () => {
  return gql`
    query GetRepositories($query: String!, $after: String) {
      search(first: 10, type: REPOSITORY, query: $query, after: $after) {
        nodes {
          ... on Repository {
            id
            name
            url
            stargazerCount
            updatedAt
          }
        }
      }
    }
  `;
};
export const GET_REPOSITORY_DETIAL = () => {
  return gql`
    query GetRepository($id: ID!) {
      node(id: $id) {
        ... on Repository {
          id
          name
          url
          stargazerCount
          updatedAt
          owner {
            ... on User {
              id
              avatarUrl
              resourcePath
            }
          }
          languages(first: 10) {
            nodes {
              name
              color
              id
            }
          }
          description
        }
      }
    }
  `;
};
export const GET_USER_DATA = () => {
  return gql`
    query {
      viewer {
        avatarUrl
        email
        id
        name
        login
      }
    }
  `;
};
