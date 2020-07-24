import React from "react";
import {Menu} from "antd";
//TODO: make whole of sidebar white, if not it's too ugly
//TODO: display components when i click on something in the sidebar.

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
  const styledTopics = [];
  topics.forEach((topic, index) =>
    styledTopics.push(
      <Menu.Item key={index} onClick={changeSelectedKey}>
        {topic}
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
}
export default TopicMenu;
