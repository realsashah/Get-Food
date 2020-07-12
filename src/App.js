import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import DishContextProvider from './contexts/DishContext';


function App() {
  return (
      <BrowserRouter>
        <div>
          <DishContextProvider>
            <Main />
          </DishContextProvider>
        </div>
      </BrowserRouter>
  );
}

export default App;
