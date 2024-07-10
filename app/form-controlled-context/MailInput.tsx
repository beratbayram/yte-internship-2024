"use client";
import { ChangeEvent, useContext, useState } from "react";
import { MailContext } from "./FormContexts";

export function MailInput() {

  const [mail, setMail] = useContext(MailContext);

  function handleMailChange(e: ChangeEvent<HTMLInputElement>){
    setMail(e.target.value);
  }

  return (
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={mail}
        onChange={handleMailChange}
      />
    </label>
  );
}
