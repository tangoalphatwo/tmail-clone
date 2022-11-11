import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material';
import { IconButton, Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './Firebase';

function EmailList() {
  // 
  const [emails, setEmails] = useState([]);

  // useEffect hook fires when loaded or when dependency in last [] is used
  useEffect(() => {
    db.collection('emails')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))));
  }, [])

  return (

    // header for the email list, under the main header
    <div className='emailList' >

      {/* left cluster in email list header */}
      <div className='emailList__settings'>
        <div className='emailList__settigsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        {/* right cluster in email list header */}
        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      {/* email list header */}
      <div className='emailList__sections'>
        <Section Icon={Inbox} title='Primary' color='red' selected='true' />
        <Section Icon={People} title='Social' color='blue' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>
      
      {/* email list body */}
      <div className='emailList__list'>

        {/* layout of emails */}
        {emails.map(({ id, data: { to, subject, message, timestamp }}) => (
          <EmailRow 
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

      </div>
    </div>
  )
}

export default EmailList