const { ApolloClient, createHttpLink } = require('@apollo/client/core');
const { InMemoryCache } = require('@apollo/client/cache');

const fetch = require('node-fetch');

const gql = require('graphql-tag');

const noCache = {
    watchQuery: { fetchPolicy: 'no-cache' },
    query: { fetchPolicy: 'no-cache' },
    mutate: { fetchPolicy: 'no-cache' }
  };

const apolloClient = new ApolloClient({
    link: createHttpLink({
        uri: "https://cloud.ampize.me/api/graphql?access_token=bcjqegmkqytmfxwololj",
        fetch: fetch
    }), 
    cache: new InMemoryCache({
        addTypename: false
    }),
    defaultOptions: noCache,
});


apolloClient.query({
    query: gql(`query {
        contactsList(start: 0, limit: 10) {
          ampizeId
          contentURL
          hasChanges
          isPublished
          nom
          prenom
          service
          photo
          mail
          numero
        }
      }`),
}).then(data => {
   console.log(data)
}).catch(err => {
    console.log(err);
});