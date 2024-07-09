"use client";
import { useState } from "react";

export default function App() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleMailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMail(event.target.value);
  }

  return (
    <main>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={mail}
            onChange={handleMailChange}
          />
        </label>
        {mail}
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit"  disabled/>
      </form>
    </main>
  );
}
