import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "./styles.css";
import Users from "./Users";
import Albums from "./Albums";
import Nav from "./Nav";
const App = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(false);

  async function getUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";

    const res = await fetch(url);

    res
      .json()
      .then((res) => setUsers(res))
      .catch((errors) => setErrors(errors));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Router>
        <Users users={users} path="/" />
        <Albums path="/albums/:id" />
      </Router>
    </div>
  );
};

export default App;
