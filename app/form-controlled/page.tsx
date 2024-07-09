"use client";
import { useState } from "react";

function isPasswordValid(password: string): boolean {
  return (
    password.length >= 6 &&
    password
      .split("")
      .every((char) =>
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(char)
      )
  );
}

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
        <input
          type="submit"
          value="Submit"
          disabled={!isPasswordValid(password)}
        />
      </form>
    </main>
  );
}
