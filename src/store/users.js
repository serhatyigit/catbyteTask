import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    addUser(state, action) {
      return [action.payload, ...state];
    },
  },
});

export const { addUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
