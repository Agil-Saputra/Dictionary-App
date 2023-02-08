import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Datas from './redux/data'

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'

import {QueryClient, QueryClientProvider} from 'react-query';

const store = configureStore({
  reducer: { 
    data: Datas }
})

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
