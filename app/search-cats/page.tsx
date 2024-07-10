'use client';
import React, {useContext, useEffect, useState } from 'react';
import {
  CatsContext,
  SearchContext,
} from "./Contexts";

interface Cat {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

const SearchBar = () => {
  const [search, setSearch] = useContext(SearchContext);
  const [cats] = useContext(CatsContext);

  return (
    <input 
      type="text"
      placeholder="Search..." 
      disabled={cats.length === 0}
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
    />
  )
}

const CatsList = () => {
  const [cats, setCats] = useContext(CatsContext);
  const [search] = useContext(SearchContext);

  const filterCats = cats.filter(cat => cat.breed?.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    async function fetchCats(){
      const res = await fetch("https://catfact.ninja/breeds");
      const json = await res.json();
      setCats(json.data);
    }
    fetchCats();
  },[])

  return (
    <>
      {filterCats.map(cat => <li key={cat.breed}> {cat.breed}</li>)}
    </>
  )
}
export default function Page() {
  const cat = useState<Cat[]>([]);
  const search = useState("")
  return (
    <main>
      <CatsContext.Provider value={cat}>
        <SearchContext.Provider value={search}>
          <SearchBar />
          <CatsList />
        </SearchContext.Provider>
      </CatsContext.Provider>
    </main>
  );
}