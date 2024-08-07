import ReactDOM from 'react-dom/client'
import './App.css'
import Router from './router'
import { Provider } from 'react-redux'
import { setupStore } from './Redux'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore()}>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </Provider>
)
