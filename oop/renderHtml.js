"use strict";

import { addPawnPieceToObject } from "./functions_of_pieces/pawn_function.js";

// create a function that renders html using array that we provide
const renderUI = function (squares) {
  // select mainContainer from my markup
  const mainContainer = document.querySelector(".main-container");
  let rankNumber = 8;

  // create square of size 70 x 70
  squares.forEach((element) => {
    // rank is row and we have 8 ranks
    let rank = document.createElement("div");
    rank.classList.add("rank-style");
    rank.setAttribute("rank", rankNumber--);

    // -----------------
    element.forEach((el) => {
      el.isPiece = addPawnPieceToObject(el);
      // console.log(el);

      // creating html element with javascript
      const square = document.createElement("div");
      square.classList.add(`color-${el.color}`);
      square.classList.add("square-common");
      // assign unique id to each square
      square.setAttribute("id", el.id);
      // add file class to each square
      square.classList.add("file-" + el.id[0]);

      square.addEventListener("click", el.movement);

      const imgElement = document.createElement("img");
      if (el.isPiece) {
        imgElement.setAttribute("src", el.isPiece);
      }
      square.appendChild(imgElement);

      rank.appendChild(square);
    });
    mainContainer.appendChild(rank);
  });
};

import { mainMap } from "./initial_mapping.js";
renderUI(mainMap);
