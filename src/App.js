import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import {  Route, Routes } from 'react-router-dom';



const App = (props) => {

  return(
  

      <div className='app-wrapper'>
        <Header />
        <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
            <Route path='/dialog/*' element={<Dialog store={props.store} dialogs={props.state.dialogPage.dialogs} messages={props.state.dialogPage.messages}/>}/>
            <Route path='/profile' element={<Profile posts={props.state.profilePage.posts} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText}  />}/>
            </Routes>
          </div>
      </div>

  )
}


export default App;
