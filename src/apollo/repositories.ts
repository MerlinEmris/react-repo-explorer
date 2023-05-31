import { gql } from "@apollo/client";

export const GET_REPOSITORIES = (query: string) => {
  return gql`
    query {
  search(first: 10, type: REPOSITORY, query: "${query}") {
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
export const GET_REPOSITORY = (query: string) => {
  return gql`
    query {
        {
            search(first: 10, type: REPOSITORY, query: "${query}") {
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
        }
    }
  `;
};
