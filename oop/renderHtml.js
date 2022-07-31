'use strict';

// create a function that renders html using array that we provide
const renderUI = function(squares){
    
    // select mainContainer from my markup
    const mainContainer  =  document.querySelector('.main-container');
    // console.log(mainContainer);

    // create square of size 70 x 70    
    squares.forEach(element => {
        element.forEach(el =>{
            const square = document.createElement('div');
            square.style.backgroundColor = square.color;
            el.renderedHtml  = square;
            console.log(el)
        });
    });
}

export {renderUI};        