import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import News from './News';

function App() {
  return (
    <div className="app h-100">

      <Header />
      <div className="d-flex justify-content-center">
        <Sidebar />
        <Feed />
        <News />
      </div>
      
    </div>
  );
}

export default App;
