import { createSlice } from '@reduxjs/toolkit';

// 
const initialState = {
  selectedMail: null,
  mail: null,
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  // The 'reducers' field lets us define reducers and generate associated actions
  reducers: {
    // delivers the mail payload
    selectMail: (state, action) => {
      // delivers the payload for the selected piece of mail
      state.selectedMail = action.payload;
    },
    // changes state to message popup active
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    // changes state to message popup hidden
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

// 
export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

// selector for the export
export const selectOpenMail = (state) => state.mail.selectedMail;

// selector for the export
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
