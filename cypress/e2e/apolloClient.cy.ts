import {ApolloClient, InMemoryCache, gql} from "@apollo/client";

describe('GitHub GraphQL API', () => {
    it('should fetch repositories using Apollo Client', () => {
        // Set up Apollo Client
        const client = new ApolloClient({
            uri: 'https://api.github.com/graphql',
            cache: new InMemoryCache(),
            headers: {
                Authorization: `Bearer ${Cypress.env('TOKEN')}`,
            },
        });

        // Define the GraphQL query
        const GET_REPOSITORIES = gql`
            query GetRepositories {
                viewer {
                    repositories(first: 10) {
                        nodes {
                            name
                        }
                    }
                }
            }
        `;

        // Visit your React application's page
        cy.visit('/');

        // Execute the GraphQL query using Apollo Client
        cy.wrap(client.query({ query: GET_REPOSITORIES })).then((response) => {
            // Assert on the response or perform further tests
            const { data } = response;
            expect(data.viewer.repositories.nodes.length).to.equal(10);
            // ...
        });
    });
});