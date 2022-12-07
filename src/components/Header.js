import React, { useEffect, useState, useContext } from "react";
import "./header.css";
import { newContext } from "./context";

function Header() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState({
    id: false,
    email: false,
    name: false,
  });
  const { setState } = useContext(newContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => setUsers(res));
  }, []);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = () => {
    if (users.find((obj) => obj.email === email)) {
      setNewUser(users.find((obj) => obj.email === email));
      setState(true);
    } else alert("Wrong email");
  };

  return (
    <>
      <div id="search">
        <input
          type="text"
          placeholder="Enter the email"
          onChange={handleEmailChange}
          value={email}
        ></input>
        <input type="submit" value="Submit" onClick={handleClick}></input>
        <div id="name">{newUser.name ? `Welcome! ${newUser.name}` : ""}</div>
      </div>
    </>
  );
}

export default Header;
