import React, { useState } from 'react';
import GameDetail from './components/GameDetail';
import Home from './components/Home';
import Layout from './components/Layout';
import ListOfGames from './components/ListOfGames';
import Login from './components/Login';
import './styles/App.scss';

function App() {
  const [activePage, setActivePage] = useState('Login');
  const [game, setGame] = useState(null);

  function renderContent() {
    if (activePage === 'Login') {
      return <Login changePage={setActivePage} />;
    }
    if (activePage === 'Home') {
      return <Home changePage={setActivePage} />;
    }
    if (activePage === 'ListOfGames') {
      return <ListOfGames changeGame={setGame} changePage={setActivePage} />;
    }
    if (activePage === 'GameDetail') {
      return <GameDetail game={game} changePage={setActivePage} />;
    }
    return null;
  }
  return (
    <div className="App">
      <Layout changePage={setActivePage}>{renderContent()}</Layout>
    </div>
  );
}

export default App;
