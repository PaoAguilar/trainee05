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

  const renderContent = {
    Login: <Login changePage={setActivePage} />,
    Home: <Home changePage={setActivePage} />,
    ListOfGames: (
      <ListOfGames changeGame={setGame} changePage={setActivePage} />
    ),
    GameDetail: <GameDetail game={game} changePage={setActivePage} />,
  };

  return (
    <div className="App">
      <Layout changePage={setActivePage}>{renderContent[activePage]}</Layout>
    </div>
  );
}

export default App;
