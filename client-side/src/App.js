import './App.css';
import Login from './components/LoginForm';
import Register from './components/RegisterForm';
import MessagesList from './components/MessagesList';
import PersonalArea from './components/PersonalArea';
import NewMessage from './components/NewMessage';
import { useState } from 'react';
function App() {
  const [getShowLogin, setShowLogin] = useState(true);
  const [getShowPersonalArea, setShowPersonalArea] = useState(false);
  return (
    <div className="App">
      <Login showPersonalArea={getShowPersonalArea} setShowPersonalArea={setShowPersonalArea} />
      <PersonalArea unshowLogin={getShowPersonalArea} setShowLogin={setShowLogin}/>
{/* <NewMessage/> */}
    </div>
  );
}
export default App;