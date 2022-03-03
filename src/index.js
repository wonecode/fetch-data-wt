const { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } = require("@apollo/client");
import fetch from "node-fetch";

// const client = new ApolloClient({
//   link: createHttpLink({
//     uri: "https://cloud.ampize.me/api/graphql",
//     headers: {
//       access_token: "bcjqegmkqytmfxwololj",
//     },
//     fetch,
//   }),
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: "https://cloud.ampize.me/api/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
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
      }
    `,
  })
  .then((contacts) => {
    console.log(contacts);
  });

// import axios from "axios";
// import fs from "fs";

// const baseUrl = "https://cloud.ampize.me/api/graphql?query=query%20q";
// const token = "&access_token=bcjqegmkqytmfxwololj";

// const queryContactsList =
//   "{contactsList(start:0,limit:1000){ampizeId%20contentURL%20hasChanges%20isPublished%20%20nom%20prenom%20service}}";

// const contactsListUrl = baseUrl + queryContactsList + token;

// const getContacts = async () => {
//   try {
//     const { data } = await axios.get(contactsListUrl);
//     const contactsList = data.data.contactsList;

//     contactsList.forEach((contact) => {
//       contact.details = getContactDetails(contact.ampizeId);
//     });

//     const contactsListJSON = JSON.stringify(data.data.contactsList);

//     fs.writeFile("src/data/contacts.json", contactsListJSON, "utf8", (err) => {
//       if (err) throw err;
//       console.log("Fichier créé !");
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// getContacts();
