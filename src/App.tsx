/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import "./App.css";
function App() {
  const [contact, setContact] = useState("");
  return (
    <>
      <h1>Welcome</h1>
      <h2>Enter your friend's WhatsApp number below to dive into their DMs</h2>
      <form action={"https://wa.me/" + contact} target="_bl" method="get">
        <input
          type="number"
          inputMode="numeric"
          placeholder="Enter friends's number"
          onChange={(e) => setContact(e.target.value)}
        />
        <input type="submit" value="Enter their Dm" />
      </form>
    </>
  );
}
export default App;
