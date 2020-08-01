import React from 'react';

import Login from './pages/Login';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
