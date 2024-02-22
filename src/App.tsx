/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import "./App.css";
function App() {
  const
  [contact, setContact] = useState("")
  // [val, setVal] = useState("")
  ;
  return (
    <>
      <h1>Welcome</h1>
      <h2>Enter your friend's WhatsApp number below to dive into their DMs</h2>
      <form action={"https://wa.me/234" + contact} target="_bl" method="get">

        <input type="text" value={"+234"} readOnly className="ro"/>

        <input
        autoFocus
          type="number"
          inputMode="numeric"
          placeholder="Enter friends's number"
          // value={val}
          onChange={(e) => {
            const value = e.target.value
            setContact(value);

            if(value.startsWith("0")){
              // setVal("")
              alert("Your first input cannot be '0'")
              e.target.value = ""
            }else{
              /* const formattedNumber = value.replace(value.charAt(2), value.charAt(2) + " ");
              
              // formattedNumber = value.replace(value.charAt(6), value.charAt(6) + " ");


              e.target.value = formattedNumber */
            }
          }}
        />
        <input type="submit" value="Enter their Dm" />
      </form>
    </>
  );
}
export default App;
