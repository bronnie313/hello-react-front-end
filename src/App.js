import React from 'react';
import { Route, Routes } from 'react-router';
import Greeting from './components/Greeting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
