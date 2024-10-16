import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/common/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Visitor from './pages/Visitor';
import GameStat from './pages/GameStat';
import UserSetting from './pages/UserSetting';
import AdminSetting from './pages/AdminSetting';
import TopicSetting from './pages/TopicSetting';
import Error from './pages/Error';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  // 배포 시 콘솔로그 막기
  if (process.env.NODE_ENV === 'production') {
    ['log', 'warn', 'error'].forEach(method => {
      (console as any)[method] = () => {
        /* no-op */
      };
    });
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="/visitors" element={<Visitor />} />
            <Route path="/gamestats" element={<GameStat />} />
            <Route path="/usersetting" element={<UserSetting />} />
            <Route path="/adminsetting" element={<AdminSetting />} />
            <Route path="/topicsetting" element={< />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path={'*'} element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

// 