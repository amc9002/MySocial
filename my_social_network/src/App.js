
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Friends from './Components/Friends/Friends';
import Users from './Components/Users/Users';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import { UsersContainer } from './Components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app-wrapper">
          <Header />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/friends' element={<Friends />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
