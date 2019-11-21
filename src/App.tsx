import React from 'react';
import './App.css';
import RollDice from './dies-roll-game/RollDice/RollDice';
import { Layout, Menu } from 'antd';
// import ReactIcon from './assets/react-icon.png';
const { Header } = Layout;
const App: React.FC = () => {
  return (
    <Layout>
      <Header>
        <div className="logo">{/* <img src={ReactIcon} alt="icon" /> */}</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Dice Roll</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <div className="App">
        <RollDice />
      </div>
    </Layout>
  );
};

export default App;
