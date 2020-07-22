import React from 'react';
import {Layout} from 'antd';
import logo from './logo.svg';
import './App.css';

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Layout>
        <NavBar />
      </Layout>
    </div>
  );
}

export default App;
