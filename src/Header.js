import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton, Menu } from '@mui/material';
import { Apps, ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';

function Header() {

  //
  const user = useSelector(selectUser);

  //
  const dispatch = useDispatch()

  // 
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  };

  return (
    <div className='header'>

      {/* menu icon and company logo in header */}
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2FscGFjYS0yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19' alt='' />
      </div>

      {/* search componenet in header */}
      <div className='header__middle'>
        <Search />
        <input placeholder='Search mail' type='text' />
        <ArrowDropDown className='header__inputCaret'/>
      </div>

      {/* everything right of the search in the header */}
      <div className='header__right'>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  )
}

export default Header