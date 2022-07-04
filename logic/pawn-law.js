"use strict";

// Push All Pawn elements inside this array
const arrayOfPawn = [];

// Push my black pawn elements
for (const i of filesNameArray) {
  arrayOfPawn.push(document.getElementById(i + 2));
}

// Push my white pawn elements
for (const i of filesNameArray) {
  arrayOfPawn.push(document.getElementById(i + 7));
}

// Add EventListner On All Pawn Elements(arrayOfPawn)
for (const i of arrayOfPawn) {
  i.addEventListener("click", () => {
    // Print Clicked Pawn Element
    // console.log(i);

    // Store Clicked Element
    const clickedElement = i;

    // Find Id of Clicked Element
    const currentId = i.getAttribute("id");

    // Print id of Clicked Pawn Element
    // console.log(currentId);

    // Get the Number from ID
    let change = parseInt(currentId[1]);
    // console.log(change);

    // Array of elements that we want to add circles
    const addCircleToElements = [];

    // Push elements in array (to which we want to add circles)
    for (let i = 0; i < 2; i++) {
      change++;
      addCircleToElements.push(document.getElementById(currentId[0] + change));
    }

    // Add circle to each elements of passed array
    console.log(addCircleToElements);
    hightlightCircle(addCircleToElements, clickedElement);
  });
}

// Track in which Squares we added circles
const insertedCircle = [];

// Add circle to each elements of passed array
const hightlightCircle = function (attachCircles, clickedElement) {
  // Check the Inserted circle
  if (insertedCircle.length != 0) removeMyCircle(insertedCircle);

  // Attach the created childs to parent
  attachCircles.forEach((i) => {
    // Add class to square in which we want to add circle
    i.classList.add("flex");

    // movement here
    i.addEventListener("click", function () {
      i.innerHTML = clickedElement.innerHTML;
      const removeCircleFromThis = attachCircles.filter((el) => el !== i);
      removeMyCircle(removeCircleFromThis);
      clickedElement.innerHTML = "";
    });
    // Add circle to square
    i.innerHTML = `<div class="circle"></div>`;

    // Add all element in Array which we have inserted circles
    insertedCircle.push(i);
  });
};

/**************************NOT Ready******************/
// const removeCircle = function (...element) {
//   const toBeRemoved = document.getElementsByClassName("circle");
//   console.log(toBeRemoved);
//   console.log(element[0].removeChild(toBeRemoved[0]));
// };

// Remove My Circle
const removeMyCircle = function (removalArray) {
  removalArray.forEach((i) => {
    i.innerHTML = "";
    i.classList.remove("flex");
    // console.log("Removal Elements ", i);
  });
};

// remove circle from Square
