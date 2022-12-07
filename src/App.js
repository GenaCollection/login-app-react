import Header from "./components/Header";
import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { newContext } from "./components/context";

function App() {
  const [data, setData] = useState([]);
  const { state } = useContext(newContext);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setData(res));
  }, []);
  let titleStyle = {
    display: "none",
  };
  const styleChange = (e) => {
    e.target.nextSibling.style = titleStyle;
  };
  const showContent = (
    <div>
      {data.map((obj) => {
        return (
          <span key={uuidv4()}>
            <p onClick={styleChange}>Title: {obj.title}</p>
            <p style={titleStyle}>Post: {obj.body}</p>
          </span>
        );
      })}
    </div>
  );

  return (
    <>
      <Header />
      {state ? showContent : <></>}
    </>
  );
}

export default App;
