import { authors } from "./lib/data.js";

import Card from "./components/Card/Card.js";
// createCard was renamed to Card during import
import createHeader from "./components/Header/Header.js";

/** Get root element */

const root = document.querySelector("#root");

/** Header */
const header = createHeader();
console.log(header);

root.append(header);

/** Main: Author Cards */

authors.forEach(function (author) {
  const card = Card(author);
  root.append(card);
});

// forEach loop

const testArray = [1, "asdf", { test: 1234 }, true, "test"];

function logItem(arrayItem) {
  console.log(arrayItem);
}

console.clear();
testArray.forEach(logItem);
logItem(testArray[0]);
logItem(testArray[1]);
logItem(testArray[2]);
logItem(testArray[3]);
logItem(testArray[4]);
