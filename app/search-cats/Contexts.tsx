import { Dispatch, SetStateAction, createContext } from "react";

export interface CatType {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

type CatListContextType = [CatType[], Dispatch<SetStateAction<CatType[]>>]
type SearchContextType = [string, Dispatch<SetStateAction<string>>]

export const CatsContext = createContext<CatListContextType>([[], () => {}]);
export const SearchContext = createContext<SearchContextType>(["", () => {}]);