import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux'
import DishContextProvider from './contexts/DishContext';
// import {ConfigureStore} from './redux/configureStore'

// const store=ConfigureStore();

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <div>
          <DishContextProvider>
            <Main />
          </DishContextProvider>
        </div>
      </BrowserRouter>
    //  </Provider>
  );
}

export default App;
