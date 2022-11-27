// this file contains all function that we can export

export function addPawnPieceToObject(obj) {
  const rank = obj.id[1];

  // attaching a function to object of pawn
  obj.movement = function () {
    console.log("I am Pawn");
  };
  console.log(obj);

  if (rank == 2) {
    return "../images/pieces/black/pawn.png";
  } else if (rank == 7) {
    return "../images/pieces/white/pawn.png";
  } else {
    return false;
  }
}
