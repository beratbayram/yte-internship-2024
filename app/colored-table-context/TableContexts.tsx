import { createContext } from "react";

type ContextType = (x: boolean) => void;

export const SetIsLightGreenContext = createContext<ContextType>(
  () => undefined
);
export const SetIsLightBlueContext = createContext<ContextType>(
  () => undefined
);
export const SetIsLightYellowContext = createContext<ContextType>(
  () => undefined
);
