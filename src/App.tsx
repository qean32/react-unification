import ReactDOM from 'react-dom/client'
import './App.css'
import Router from './router'
import { Provider } from 'react-redux'
import { setupStore } from './Redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore()}>
    <Router />
  </Provider>
)
