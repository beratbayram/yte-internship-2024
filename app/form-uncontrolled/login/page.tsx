"use client";
import { FormEvent } from "react";

export default function App() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password") as string;

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (
      password
        .split("")
        .every((char) =>
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(char)
        )
    )
      alert(`Email: ${email}, Password: ${password}`);
    else alert("Password must contain only numbers.");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>{" "}
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
