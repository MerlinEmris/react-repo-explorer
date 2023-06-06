import { gql } from "@apollo/client";

export const GET_REPOSITORIES = () => {
  return gql`
    query GetRepositories(
      $query: String!
      $endCursor: String
      $startCursor: String
    ) {
      search(
        first: 10
        type: REPOSITORY
        query: $query
        after: $endCursor
        before: $startCursor
      ) {
        pageInfo {
          startCursor
          hasNextPage
          endCursor
          hasPreviousPage
        }
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
