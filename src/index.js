import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/id/870/200/300?grayscale&blur=2";

ReactDOM.render(
  <div spellcheck="false">
    <h1 className="TitleFoods" contentEditable="true">
      My Favourite Foods
    </h1>
    <div className="imgs-foods">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhm8a4oNJSeFB-anZnOAnyS9yXgme9hedng&s" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfbQq_2MCnJ-52jrSpHCasao3_YSb8ndQ4w&s" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP1FIvJt037W1O0aODGuqr7dqclYf3EuypQ&s" />
      <img src={img + "?blur"} />
    </div>
  </div>,
  document.getElementById("root")
);
