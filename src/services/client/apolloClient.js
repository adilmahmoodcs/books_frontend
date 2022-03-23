import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${import.meta.env.VITE_API_URL}/graphql`,
    fetch
  }),
  cache: new InMemoryCache()
})
