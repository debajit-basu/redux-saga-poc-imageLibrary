import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Header from "./Component/Header";
import ImageGrid from "./Component/ImageGrid";
import configureStore from './store/index';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Header/>
              <ImageGrid/>

          </div>
      </Provider>

  );
}

export default App;
