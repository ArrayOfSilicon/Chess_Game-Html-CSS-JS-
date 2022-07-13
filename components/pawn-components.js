
// create pawn component

const pawnCompo = "<div class='pawnCompo'><img src='./images/pieces/black/pawn.png' alt='chess-pawn-piece image'></div>";

filesNameArray.forEach((i) => {
    const id = i + 2;
    const element = document.getElementById(id);
    element.innerHTML = pawnCompo;
})