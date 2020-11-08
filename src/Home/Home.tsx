import React from "react";
import Button from "@material-ui/core/Button";
import "./Home.css";

const Home = () => (
  <div className="App">
    This is demo component. <h3>Hello, testing testing 123</h3>
    <a href="/about">About Page</a>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default Home;
