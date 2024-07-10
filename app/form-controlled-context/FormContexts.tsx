import { createContext } from "react";

type ContextType = [string, (x: string) => void];

export const MailContext = createContext<ContextType>(["", () => undefined]);
export const PasswordContext = createContext<ContextType>(["", () => undefined]);
