import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import './Mail.css';

function Mail() {

  // react router navigation hook
  const navigate = useNavigate();

  // selector to get mail
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className='mail' >
      <div className='mail__tools'>

        {/* mail page toolbar left */}
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        {/* mail page toolbar right */}
        <div className='mail__toolsRight'>
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      {/* email body */}
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className='mail__important'/>
          <p className='mail__title'>{selectedMail?.title}</p>
          <p className='mail__time'>{selectedMail?.time}</p>
        </div>
        <div className='mail__message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail