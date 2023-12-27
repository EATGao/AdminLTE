import React, { Children, useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    InfoCircleOutlined,
    InfoOutlined
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Page1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: 'Page2',
    key: '/page2',
    icon: <DesktopOutlined />
  },
  {
    label: 'Page3',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Submenu1',
        key: '/page3/page301'
      },
      {
        label: 'Submenu2',
        key: '/page3/page302'
      },
      {
        label: 'Submenu3',
        key: '/page3/page303'
      }
    ]
  },
  {
    label: 'Page4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: 'Submenu1',
        key: '/page4/page401'
      },
      {
        label: 'Submenu2',
        key: '/page4/page402'
      }
    ]
  },
  {
    label: 'Files',
    key: '/files',
    icon: <FileOutlined />
  },
  {
    label: 'About',
    key: '/about',
    icon: <InfoOutlined />
  },
]

const MainMenu: React.FC = () => {
  
  const navigateTo = useNavigate();
  const currentRoute = useLocation();

  const menuClick = (e: {key:string}) =>{
    navigateTo(e.key);
  }

  // find the key based on the current route path 
  let firstOpenKey: string = "";

  function findKey(obj: {key:string}) {
    return obj.key === currentRoute.pathname;
  }

  // @ts-ignore
  for (let i = 0; i < items.length; i++) {
    if (items[i]!['children'] && items[i]!['children'].length > 1 && items[i]!['children'].find(findKey)) {
      firstOpenKey = items[i]!.key;
      break;
    }
  }
  

  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]])
  }

  return (
      <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick} onOpenChange={handleOpenChange} openKeys={openKeys}/>
  )
}

export default MainMenu;