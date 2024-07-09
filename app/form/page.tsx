'use client';
import { FormEvent } from "react";

export default function App() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    alert(`Email: ${email}, Password: ${password}`);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label> <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label> <br />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
