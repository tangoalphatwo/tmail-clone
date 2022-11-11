import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import Sendmail from './Sendmail';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { auth } from './Firebase';
import Login from './Login';

function App() {

  // react-redux use selector hook, gets the new message state from redux data layer
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  // redux useSelector hook, gets user from redux
  const user = useSelector(selectUser);

  // redux dispatch hook
  const dispatch = useDispatch();

  //
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        //user logged in
        dispatch(login({
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        }));
      } else {
        //user logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    // wrapping the componenets adds router function
    <Router>
      {/* if no user render login component */}
      {!user ? (<Login />) : (
        <div className="app">

          {/* Header component - always render */}
          <Header />

          {/*  */}
          <div className='app__body' >
            {/* Sidebar componenet - always render */}
            <Sidebar />

            {/* inside the switch to use router */}
            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>

          </div>

          {/* if sendMessageIsOpen state, render sendmail componenet */}
          { sendMessageIsOpen && <Sendmail />}

        </div>
      )}
    </Router>
    
  );
}

export default App;
