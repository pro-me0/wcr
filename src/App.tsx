/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import "./App.css";

function App() {
  const [contact, setContact] = useState("");
  /*  _setContact = async (arg: string) => {
      console.log(`a: ${arg}`);
      console.log(`con: ${contact}`);

      let _number: string;
      const args = arg.split(" ");

      args.forEach((item) => {
        _number = _number += item;
      });

      // @ts-ignore
      setContact(_number);
      // console.log(_number);
    }; */

  return (
    <>
      <h1>Welcome</h1>
      <form action={"https://wa.me/" + contact} target="_bl" method="get">
        <input
          type="number"
          inputMode="numeric"
          placeholder="Enter Contact's Number"
          // value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input type="submit" value="Enter Dm" />
      </form>
    </>
  );
}

export default App;
