import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "antd/dist/reset.css"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import persistor, { store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>

  </Provider>
)
