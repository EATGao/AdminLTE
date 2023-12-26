import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    InfoCircleOutlined
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Page1', '/page1', <PieChartOutlined />),
  getItem('Page2', '/page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '/files', <FileOutlined />),
  getItem('About', '/about', <InfoCircleOutlined />),
];

const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const menuClick = (e: {key:string}) =>{
      navigateTo(e.key);
    }
  
    const [openKeys, setOpenKeys] = useState(['']);
    const handleOpenChange = (keys: string[]) => {
      setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} onOpenChange={handleOpenChange} openKeys={openKeys}/>
    )
}

export default MainMenu;