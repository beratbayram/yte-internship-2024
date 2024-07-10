"use client";

import { useContext } from "react";
import { MailInput } from "./MailInput";
import { PasswordInput } from "./PasswordInput";
import { PasswordContext } from "./FormContexts";

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


export function Form() {

  const [pwd] = useContext(PasswordContext);


  return (
    <form>
      <MailInput />
      <br />
      <PasswordInput />
      <br />
      <input
        type="submit"
        value="Submit"
        disabled={!isPasswordValid(pwd)}
      />
    </form>
  );
}
