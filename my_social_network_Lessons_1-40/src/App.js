
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from "./Components/Header/Header";
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Friends from './Components/Friends/Friends';
import Users from './Components/Users/Users';
import Settings from './Components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar navData={props.state.sidebar.navData} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/users' element={<Users />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;