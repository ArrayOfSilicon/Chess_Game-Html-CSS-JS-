const allSquares = document.getElementsByClassName("square");
// console.log(allSquares);

const clickedElements = [];

for (const x of allSquares) {
  x.addEventListener("click", function () {
    // push element in empty Array
    // console.log(clickedElements);

    const idOfElement = x.getAttribute("id");
    const innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;
    if (clickedElements.length > 0) {
      clickedElements[0].removeAttribute("style");
      clickedElements.length = 0;
    }
    // console.log(x);
    if (
      innerHtmlOfElement.includes("black") ||
      innerHtmlOfElement.includes("white")
    ) {
      document.getElementById(idOfElement).style.backgroundColor = "#baca2b";
      clickedElements.push(x);
    }
  });
}
