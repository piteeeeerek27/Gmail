import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount));
	}, 1000);
};

export const selectCount = (state) => state.user.value;

export default userSlice.reducer;
