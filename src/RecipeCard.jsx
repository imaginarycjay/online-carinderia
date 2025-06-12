import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteIconBorder from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

export default function RecipeCard({ dish, favorite }) {
  
  const [fav, setFav] = useState(favorite);
  // function to toggle favorite
  const isFavorite = () => {
    setFav((prev) => !prev);
  };  

  return (
    <div className="hover:cursor-pointer">
      <div
        className={`flex flex-col bg-cover items-baseline justify-between mt-4 h-[20rem] rounded-md shadow-lg`}
        style={{backgroundImage: `url(${dish.img})`}}
      >
        <button
          onClick={isFavorite}
          className="w-10 flex self-end mt-3 mr-3 hover:cursor-pointer hover:scale-120"
        >
          {fav && <FavoriteIcon fontSize="large" style={{ color: "white" }} />}
          {!fav && (
            <FavoriteIconBorder fontSize="large" style={{ color: "white" }} />
          )}
        </button>
        
        {dish.length !== 0 &&
        <div className="flex gap-1 flex-col items-start py-3 pl-3 backdrop-blur-xs w-full rounded-t-md  bg-black/25">
          <h2 className="text-white text-2xl font-bold ">{dish.dishTitle}</h2>
          <p className="text-white ">Price: P{dish.price} per serving</p>
        </div>}
      </div>
    </div>
  );
}
