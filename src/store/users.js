import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    addUser(state, action) {
      console.log(action.payload);
      return [action.payload, ...state];
    },
  },
});

export const { addUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
