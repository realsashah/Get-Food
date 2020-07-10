import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/Footercomponents';
import About from './components/Aboutcomponents';
function App() {
  return (
    <>
    <Header/>
    <About/>
    <Footer />
    </>
  );
}

export default App;
