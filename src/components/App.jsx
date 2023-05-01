import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [headingText, setheadingText] = useState("");

  function changeHandle(event) {
    setName(event.target.value);
    console.log(name);
  }

  function clickHandle() {
    setheadingText(name);
  }

  return (
    <div className="container">
      <h1>{headingText} </h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={changeHandle}
      />
      <button onClick={clickHandle}>Submit</button>
    </div>
  );
}

export default App;
