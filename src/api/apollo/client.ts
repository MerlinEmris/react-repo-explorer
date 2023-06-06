import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { offsetLimitPagination } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import useUserStore from "../../store/user";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = useUserStore.getState().token;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});
