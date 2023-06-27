import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.css';
import 'styles/app.css'
import App from './App';
import { QueryClient, QueryClientConfig, QueryClientProvider } from 'react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
      queries: {
          retry: 2,
          refetchOnMount: 'always',
          refetchOnWindowFocus: false,
          refetchOnReconnect: 'always',
          refetchIntervalInBackground: false,
          suspense: false,
      },
  },
};

const queryClient = new QueryClient(queryClientConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

