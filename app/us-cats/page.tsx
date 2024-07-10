'use client';
import React, {useEffect, useState } from 'react';

interface Cat {
  breed: string;
}

export default function ProductList() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {

    async function fetchCats(){
      const res = await fetch("https://catfact.ninja/breeds");
      const json = await res.json();
      setCats(json.data);

    }

    fetchCats();

  },[])

  return (
    <main>
      {cats.map(x => <li key={x.breed}> {x.breed}</li>)}
    </main>
  );
}