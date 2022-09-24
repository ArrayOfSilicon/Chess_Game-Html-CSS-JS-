'use strict';

// create a function that renders html using array that we provide
const renderUI = function(squares){
    
    // select mainContainer from my markup
    const mainContainer  =  document.querySelector('.main-container');
    // console.log(mainContainer);

    // create square of size 70 x 70    
    squares.forEach(element => {
        let rank = document.createElement("div");
        rank.classList.add('rank-style');
        mainContainer.appendChild(rank);
        element.forEach(el =>{
            const square = document.createElement('div');
            square.classList.add(`color-${el.color}`);
            square.classList.add('square-common');
            rank.appendChild(square);
        });

    });
    console.log(mainContainer);

}

export {renderUI};        