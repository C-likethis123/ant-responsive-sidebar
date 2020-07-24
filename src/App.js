import React, {useState} from 'react';
import { Layout } from 'antd';
import TopicMenu from "./components/TopicMenu"

import './App.css';

import NavBar from "./components/NavBar/NavBar";
import SideBar from './components/SideBar/SideBar';

function App() {
  const topics = ['First topic', 'Second topic', 'Third topic']
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => setSelectedKey(event.key)
  const Menu = <TopicMenu topics={topics} selectedKey={selectedKey} changeSelectedKey={changeSelectedKey}/>
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
