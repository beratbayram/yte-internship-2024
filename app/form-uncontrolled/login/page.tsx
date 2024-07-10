"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function App() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
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
    ) {
      // "home/" + name + "/?mail=" + email + "&pwd=" + password
      router.push(`home/${name}/?mail=${email}&pwd=${password}`);
    } else alert("Password must contain only numbers.");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type="name" name="name" />
        </label>{" "}
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
