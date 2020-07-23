import React from 'react';
import { Layout } from 'antd';
import TopicMenu from "./components/TopicMenu"

import './App.css';

import NavBar from "./components/NavBar/NavBar";
import SideBar from './components/SideBar/SideBar';

function App() {
  const topics = ['First topic', 'Second topic', 'Third topic']
  const defaultSelected = "0"
  const Menu = <TopicMenu topics={topics} selectedKey={defaultSelected} />
  return (
    <div className="App">
      <Layout>
        <NavBar menu={Menu}/>
      </Layout>
      <Layout>
        <SideBar menu={Menu} />
      </Layout>
    </div>
  );
}

export default App;
