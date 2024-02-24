/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import "./App.css";
import { countryCodes } from "./utils/countryCodes";

function App() {
  const [contact, setContact] = useState(""),
    [countryCode, setCountryCode] = useState("+234");
  // [val, setVal] = useState("")
  return (
    <>
      <h1>Welcome</h1>
      <h2>Enter your friend's WhatsApp number below to dive into their DMs</h2>
      <form
        action={`https://wa.me/${countryCode + contact}`}
        target="_bl"
        method="get"
      >
        {/* <input className="input" type="text" value={"+234"} readOnly className="ro"/> */}

        <select
          className="countryCode"
          onChange={(e) => {
            setCountryCode(e.target.value);
          }}
        >
          {countryCodes.map((country) => {
            return country.name == "Nigeria" ? (
              <option
                aria-placeholder={country.dial_code}
                selected
                value={country.dial_code}
              >
                {country.name + " | " + country.dial_code}
              </option>
            ) : (
              <option value={country.dial_code}>
                {country.name + " | " + country.dial_code}
              </option>
            );
          })}
        </select>

        <input
          className="number"
          autoFocus
          type="number"
          inputMode="numeric"
          placeholder="Enter friends's number"
          // value={val}
          onChange={(e) => {
            let value = e.target.value;

            if (value.startsWith("0")) {
              // e.target.value = "";
              value = value.replace("0", "");
              setContact(value);
            } else {
              setContact(value);
              /* const formattedNumber = value.replace(value.charAt(2), value.charAt(2) + " ");
              
              // formattedNumber = value.replace(value.charAt(6), value.charAt(6) + " ");


              e.target.value = formattedNumber */
            }
          }}
        />
        <input className="enter" type="submit" value="Enter their Dm" />
      </form>
    </>
  );
}
export default App;
