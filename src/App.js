import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {  Route, Routes } from 'react-router-dom';
import Dialog from './components/Dialog/Dialog';
import DialogContainer from './components/Dialog/DialogContainer';


const App = (props) => {

  return(
  

      <div className='app-wrapper'>
        <Header />
        <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
            <Route path='/dialog/*' element={<DialogContainer store={props.store}/>}/>
            <Route path='/profile' element={<Profile store={props.store} />}/>
            </Routes>
          </div>
      </div>

  )
}


export default App;
