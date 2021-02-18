import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
	name: "mail",
	initialState: {
		selectedMail: null,
		messageOpen: false,
	},
	reducers: {
		selectMail: (state, action) => {
			state.selectedMail = action.payload;
		},
		openMessage: (state) => {
			state.messageOpen = true;
		},
		closeMessage: (state) => {
			state.messageOpen = false;
		},
	},
});

export const { openMessage, closeMessage, selectMail } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectMessageOpen = (state) => state.mail.messageOpen;

export default mailSlice.reducer;
