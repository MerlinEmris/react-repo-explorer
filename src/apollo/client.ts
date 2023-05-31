import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: { Authorization: "bearer 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" },
});
