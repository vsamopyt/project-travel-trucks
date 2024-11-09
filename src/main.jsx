import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Provider} from 'react-redux';
import "modern-normalize";

import App from './components/App/App.jsx';
import {store} from "./redux/store.js"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
)
