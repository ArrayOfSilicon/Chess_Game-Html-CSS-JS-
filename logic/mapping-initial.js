// selecting files using dom and storing into array

const arrayOfFiles = document.querySelectorAll(".files");

const filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

// counter for filesArray


let fileNumber = 0;

for (const i of arrayOfFiles) {
  // counter variable of ranks(row)
  let counter = 1;
  for (const el of i.children) {
    el.setAttribute("id", filesNameArray[fileNumber] + counter);
    counter++;
  }
  fileNumber++;
}

for (const i of arrayOfFiles) {
  // console.log(i.children);
}
