"use client";
import { useState } from "react";
import { Form } from "./Form";
import { MailContext, PasswordContext } from "./FormContexts";

export default function App() {

  const mailState = useState("");
  const passwordState = useState("");

  return (
    <main>
      <MailContext.Provider value={mailState}>
        <PasswordContext.Provider value={passwordState}>
          <Form />
        </PasswordContext.Provider>
      </MailContext.Provider>
    </main>
  );
}
