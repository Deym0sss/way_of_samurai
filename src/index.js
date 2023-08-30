import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';




const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = () => {

  
  root.render(

    <React.StrictMode>
      <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>

  );

}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();
