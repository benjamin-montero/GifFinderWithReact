import { useState } from "react";
import "./styles.css";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifAppReact = () => {
  const [categories, setCategories] = useState(["one punch", ]);

  return (
    <>
      <h1>Buscador de Gifs</h1>
      <AddCategory setCategories={setCategories} categories={categories} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
