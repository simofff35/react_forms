import { set } from "mongoose";
import React, { useState } from "react";

function App() {
  let [fullN, setFullN] = useState({
    fName: "",
    lName: "",
  });

  function fullNHandler(event) {
    const newvalue = event.target.value;
    const inputName = event.target.name;

    setFullN((prevValue) => {
      console.log(prevValue);
      if (inputName === "fName") {
        console.log(prevValue);
        return {
          fName: newvalue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newvalue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {fullN.fName} {fullN.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={fullNHandler}
          value={fullN.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={fullNHandler}
          value={fullN.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
