import React, { useState } from "react";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import ListOfGames from "./components/ListOfGames/ListOfGames";
import "./styles/App.scss";

function App() {
  const [activePage, setActivePage] = useState("Home");

  function renderContent() {
    if (activePage === "Home") {
      return <Home changePage={setActivePage} />;
    } else if (activePage === "ListOfGames") {
      return <ListOfGames />;
    }
  }
  return (
    <div className="App">
      <Layout changePage={setActivePage}>{renderContent()}</Layout>
    </div>
  );
}

export default App;
