import RecipeCard from "../RecipeCard";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [userName, setUserName] = useState("Guess");
  const [favorite, setFavorite] = useState(false);
  const [dish, setDish] = useState([
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6PLjBWZLxlVlLck1VtdbKTxDGnJH89WOEw&s",
      dishTitle: "Adobo",
      price: 50,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6PLjBWZLxlVlLck1VtdbKTxDGnJH89WOEw&s",
      dishTitle: "Adobo",
      price: 50,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6PLjBWZLxlVlLck1VtdbKTxDGnJH89WOEw&s",
      dishTitle: "Adobo",
      price: 50,
    },
  ]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // todo: fetch recipe
  }, []);

  return (
    <>
      <h1 className="text-black text-3xl font-bold font-poppins md:mb-2 lg:mb-3">
        Hey, {userName}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2">
        {dish.map((items, index) => (
          <RecipeCard key={index} dish={items} favorite={favorite} />
        ))}
      </div>
    </>
  );
}
