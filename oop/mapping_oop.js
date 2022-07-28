// chess square
// Property -> 2 Colors(color == EEEED2(cream) ? 0 : 1)(white=>EEEED2 = 0 && black=>769656 (green)= 1)
// Property -> 2 isHighlighted(true OR false)
// Property -> 2 isHint(true OR false)
// Property -> 2 isPiece(true OR false){
//
// }
//
// Property -> 2 id(string)

const mainMap = [];
class Square {
    color;
    isHighlighted;
    isHint;
    isPiece;
    id;
}

for (let i = 8; i > 0; i--) {

    const isRowEven = i % 2 == 0 ? true : false;
    const rowArray = [];
    for (let j = 97; j < 105; j++) {

        const isElementEven = j % 2 == 0 ? true : false;
       
        const fileName = String.fromCharCode(j);
        const id = fileName + i;
        // create object of squares
        const square = new Square();

        // set Properties
        square.id = id;

        // color
        // odd row => odd element
        // (769656)
        if(!isRowEven && !isElementEven){
            square.color = '#769656';
        }
        
        // even row => odd element (EEEED2)
        if(isRowEven && !isElementEven){
            square.color = '#EEEED2';
        }

        // odd row => even element
        if(!isRowEven && isElementEven){
            square.color = '#EEEED2';
        }

        // even row => even element
        // (769656)
        if(isRowEven && isElementEven){
            square.color = '#769656';
        }



        // push array
        rowArray.push(square);
    }
    mainMap.push(rowArray);
}

console.log(mainMap);
// sayMyNameDear();

import * as renderModule from './renderHtml.js';
console.log(renderModule);  