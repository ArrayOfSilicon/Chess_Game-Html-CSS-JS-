// chess square
// Property -> 2 Colors(color == EEEED2(cream) ? 0 : 1)(white=>EEEED2 = 0 && black=>769656 (green)= 1)
// Property -> 2 isHighlighted(true OR false)
// Property -> 2 isHint(true OR false)
// Property -> 2 isPiece(true OR false){
//
// }
//
// Property -> 2 id(string)

// each square
export class Square {
  color; // only 2 colors
  isHighlighted; // highlighted with yellow color or not
  isHint; // small circle in middle square
  isPiece; // if exists a piece then we wil return location for image otherwise we will return false
  id; // unique id to recognize the square
  movement; // movement
}
