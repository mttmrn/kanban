import React, { useState } from "react";
import fire from "./config/auth.js";
import Header from "./components/header.js";
import Card from "./components/card";
import Column from "./components/column";

const Home = props => {
  return (
    <div className="bg centered">
      <Header />
      <div className="centered main">
        <Card addColumn={props.addColumn} />
        {props.columns.map((e, i) => (
          <Column key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
