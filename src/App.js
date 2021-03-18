import React from "react";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import "./styles/App.scss";

function App() {
  function renderContent(params) {
    return <Home />;
  }
  return (
    <div className="App">
      <Layout>{renderContent()}</Layout>
    </div>
  );
}

export default App;
