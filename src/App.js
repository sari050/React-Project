import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import UserContext from './components/UserContext';
import MyRoute from './routes/MyRoute';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <UserContext>
      {!isLogin ?
        <Login setIsLogin={setIsLogin} /> :
        <MyRoute setIsLogin={setIsLogin}/>
      }
    </UserContext>
  );
}

export default App;
