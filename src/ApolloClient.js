import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clrhraivi1g6201uuu5m4attn/master",
  cache: new InMemoryCache(),
})

export default client;
