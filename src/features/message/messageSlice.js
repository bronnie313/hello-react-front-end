import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/messages';

const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  messages: {},
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      const messageRecieved = action.payload;
      return { ...state, messages: messageRecieved };
    });
  },
});

export { fetchMessages };
export default messageSlice.reducer;
