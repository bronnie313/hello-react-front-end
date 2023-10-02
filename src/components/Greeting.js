import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../features/message/messageSlice';

const Greeting = () => {
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{messages.greeting}</p>
    </div>
  );
};

export default Greeting;
