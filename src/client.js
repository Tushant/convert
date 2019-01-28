import Cookies from 'universal-cookie';
import ApolloClient, { InMemoryCache } from 'apollo-client-preset';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';

const AUTH_TOKEN = 'auth-token';

const cookies = new Cookies();
const uploadLink = createUploadLink({
  credentials: 'same-origin',
  headers: {
    'X-CSRFToken': cookies.get('csrftoken'),
  },
  uri: 'http://localhost:8000/graphql',
});

const getAuthToken = () => localStorage.getItem(AUTH_TOKEN);

const authLink = setContext((_, context) => {
  const authToken = getAuthToken();
  return {
    ...context,
    headers: {
      ...context.headers,
      Authorization: authToken ? `JWT ${authToken}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

export default client;
