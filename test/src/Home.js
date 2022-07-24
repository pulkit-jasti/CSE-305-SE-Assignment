import React from "react";
import Card from "./Container/Card";
import Filter from "./Container/Filter";
import Header from "./Container/Header";
import Table from "./Container/Table";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Table />
      <Filter />
      <Card />
    </div>
  );
};

// Divide the home component into nav, table , filter, content

export default Home;
