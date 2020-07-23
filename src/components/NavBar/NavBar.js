import React, {useState} from "react";
import {Layout, Menu, Drawer, Button} from "antd";
import Icon, {MenuOutlined} from "@ant-design/icons";
import "./NavBar.css";
import logo from './../../logo.svg';

const NavBar = ({menu}) => {
  const [visible, setVisible] = useState(false);
  return (
    <Layout.Header className="navbar">
      <Menu theme="light" mode="horizontal">
        <Button
          className="menu"
          type="primary"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <Menu.Item key="0">
          <Drawer
            title="Topics"
            placement="left"
            onClick={() => setVisible(false)}
            onClose={() => setVisible(false)}
            visible={visible}
          >
          {menu}
          </Drawer>
        </Menu.Item>
        <Menu.Item key="1">
          <Icon
            component={() => (
              <img
                src={logo}
                height="32px"
                alt="logo"
              />
            )}
          />
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default NavBar;
