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
  const [user, setUser] = useState({
    mail: "",
    password: "",
  });

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      password: event.target.value,
    });
  }

  function handleMailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newUser = structuredClone(user);
    newUser.mail = event.target.value;
    setUser(newUser);
  }

  function handleClick(
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void {
    event.preventDefault();
  }

  return (
    <main>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.mail}
            onChange={handleMailChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />

        <input
          type="submit"
          value="Submit"
          onClick={handleClick}
          disabled={!isPasswordValid(user.password)}
        />
      </form>
    </main>
  );
}
