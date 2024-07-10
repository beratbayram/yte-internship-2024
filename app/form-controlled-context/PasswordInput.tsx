"use client";

import { ChangeEvent, useContext } from "react";
import { PasswordContext } from "./FormContexts";

export function PasswordInput() {
  const [pwd, setPwd] = useContext(PasswordContext);

  function handlePwdChange(e: ChangeEvent<HTMLInputElement>){
    setPwd(e.target.value);
  }


  return (
    <label>
      Password:
      <input
        type="password"
        name="password"
        value={pwd}
        onChange={handlePwdChange}
      />
    </label>
  );
}
