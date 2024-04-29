import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './Components/StateProvider.jsx'
import reducer, { initialState } from './Components/Reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
