import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from '@/components/MainMenu/MainMenu';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
 
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <MainMenu />
      </Sider>
      <Layout>
        <Header style={{ marginLeft: "16px", marginRight: "16px", paddingLeft: 16, background: colorBgContainer }} >
          <Breadcrumb style={{ lineHeight: '64px' }} items={[
            {title: "User"}, 
            {title: "Bill"}
          ]}>
          </Breadcrumb>
        </Header>

        <Content style={{ margin: '16px 16px 0', padding: 0, background: "#fff" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight:"48px" }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;