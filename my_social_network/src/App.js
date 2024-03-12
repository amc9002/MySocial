
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Friends from './Components/Friends/Friends';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
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
