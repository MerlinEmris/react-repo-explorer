import { gql } from "@apollo/client";

export const GET_REPOSITORIES = () => {
  return gql`
    query GetRepositories($query: String!, $type: SearchType!) {
      search(first: 10, type: $type, query: $query) {
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
export const GET_USER_REPOSITORIES = () => {
  return gql`
    query {
      viewer {
        repositories(first: 10) {
          nodes {
            id
            name
            url
            stargazerCount
            updatedAt
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  `;
};
export const GET_REPOSITORY_DETIAL = () => {
  return gql`
      query GetRepository($query:String!, $type:String=REPOSITORY) {
          {
              search(first: 10, type: REPOSITORY, query: $query) {
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
export const GET_USER_DATA = () => {
  return gql`
    query {
      viewer {
        avatarUrl
        email
        id
        name
        # repositories(first: 10) {
        #   nodes {
        #     id
        #     name
        #     url
        #     stargazerCount
        #     updatedAt
        #   }
        # }
      }
    }
  `;
};

// {
//   search(first: 10, type: USER, query: "merdanchariyarov@gmail.com") {
//     pageInfo {
//       startCursor
//       hasNextPage
//       endCursor
//       hasPreviousPage
//     }
//     nodes {
//       ... on User {
//         repositories(first: 10) {
//           nodes {
//             id
//             name
//             url
//             stargazerCount
//             updatedAt
//             owner {
//               id
//             }
//           }
//         }
//       }
//     }
//   }
// }
