import './App.css';
import { Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import EatPage from '@/pages/eat/index'

function App() {

  return (
    <div id="app">
      <ConfigProvider locale={zhCN}>
        <Route path="/" component={ EatPage } />
      </ConfigProvider>
    </div>
    
  );
}

export default App;
