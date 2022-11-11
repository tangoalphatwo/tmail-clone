import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@mui/material';
import SidebarOption from './SidebarOption';
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {

    // dispatches an action into redux
    const dispatch = useDispatch();

  return (
    <div className='sidebar'>
        {/* compose button */}
        <Button onClick={() => dispatch(openSendMessage())} startIcon={<Add fontSize='large' />} className='sidebar__compose' >Compose</Button>

        {/* inbox icons */}
        <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={true} />
        <SidebarOption Icon={Star} title='Starred' number={54} selected={false} />
        <SidebarOption Icon={AccessTime} title='Snoozed' number={54} selected={false} />
        <SidebarOption Icon={LabelImportant} title='Important' number={54} selected={false} />
        <SidebarOption Icon={NearMe} title='Sent' number={54} selected={false} />
        <SidebarOption Icon={Note} title='Drafts' number={54} selected={false} />
        <SidebarOption Icon={ExpandMore} title='More' number={54} selected={false} />

        {/* sidebar footer compoenent */}
        <div className='sidebar__footer'>
            <div className='sidebar__footerIcons'>
                <IconButton>
                    <Person/>
                </IconButton>
                <IconButton>
                    <Duo/>
                </IconButton>
                <IconButton>
                    <Phone/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar