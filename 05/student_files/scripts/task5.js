/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const date = new Date();
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
const actualDay = date.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let welcomeMessage = "";
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
const isNotWeekend = actualDay !== 6 && actualDay !== 7;
if (isNotWeekend) {
  welcomeMessage = "Hagn in there";
} else {
  welcomeMessage = "Woohoo!  It is the weekend!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let welcomeMessage2 = "";
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (actualDay) {
  case 1:
    welcomeMessage2 = "Hagn in there";
    break;
  case 2:
    welcomeMessage2 = "Hagn in there";
    break;
  case 3:
    welcomeMessage2 = "Hagn in there";
    break;
  case 4:
    welcomeMessage2 = "Hagn in there";
    break;
  case 5:
    welcomeMessage2 = "Hagn in there";
    break;
  case 6:
    welcomeMessage2 = "Woohoo!  It is the weekend!";
    break;
  case 7:
    welcomeMessage2 = "Woohoo!  It is the weekend!";
    break;
  default:
    break;
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").textContent = welcomeMessage;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").textContent = welcomeMessage2;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templesList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

async function getTemples() {
  const templesUrl =
    "https://byui-cse.github.io/cse121b-course/week05/temples.json";
  const response = await fetch(templesUrl, {
    method: "GET",
  }).then((response) => response.json());
  templesList.push(...response);
  console.log(
    "🚀 ~ file: task5.js ~ line 70 ~ getTemples ~ templesList",
    templesList
  );
  output(response);
  addExtraFilterOptions(response[0]);
}

function output(templeList) {
  templeList.forEach(({ templeName, location, dedicated, imageUrl }) => {
    const art = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = templeName;

    const h43First = document.createElement("h4");
    h43First.textContent = location;

    const h4Second = document.createElement("h4");
    h4Second.textContent = dedicated;

    const img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("alt", templeName);

    art.appendChild(h3);
    art.appendChild(h43First);
    art.appendChild(h43First);
    art.appendChild(h4Second);
    art.appendChild(img);
    document.getElementById("temples").appendChild(art);
  });
}
getTemples();

// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset() {
  const templeElement = document.getElementById("temples");
  /*   const nodes = templeElement.childNodes;
  console.log("🚀 ~ file: task5.js ~ line 112 ~ reset ~ nodes", nodes);
  nodes.forEach((node) => {
    console.log("🚀 ~ file: task5.js ~ line 117 ~ nodes.forEach ~ node", node);

    console.log("BEFORE", templeElement.childElementCount);
    templeElement.removeChild(node);
    console.log("AFTER", templeElement.childElementCount);
    //? DOES NOT WORK
  }); */
  while (templeElement.firstChild) {
    templeElement.removeChild(templeElement.lastChild);
  }
}
document.getElementById("sortBy").addEventListener("change", (e) => {
  reset();
  console.log(
    "🚀 ~ file: task5.js ~ line 165 ~ document.getElementById ~ e",
    e
  );

  const key = e.target.selectedOptions[0].className;
  const value = e.target.value.toLowerCase();
  const ascending = (a, b, templeProperty) => {
    if (a[templeProperty] < b[templeProperty]) {
      return -1;
    } else if (a[templeProperty] > b[templeProperty]) {
      return 1;
    } else {
      return 0;
    }
  };

  const descending = (a, b, templeProperty) => {
    if (a[templeProperty] < b[templeProperty]) {
      return 1;
    } else if (a[templeProperty] > b[templeProperty]) {
      return -1;
    } else {
      return 0;
    }
  };
  if (value.includes("descending")) {
    output(templesList.sort((a, b) => descending(a, b, key)));
  } else {
    output(templesList.sort((a, b) => ascending(a, b, key)));
  }
});

function addExtraFilterOptions(templeElement) {
  for (const key in templeElement) {
    if (Object.hasOwnProperty.call(templeElement, key)) {
      if (key !== "templeName") {
        const selectSort = document.getElementById("sortBy");
        const newOptionAsc = document.createElement("option");
        newOptionAsc.textContent = `Temple ${key} ascending`;
        newOptionAsc.value = `Temple${key}ascending`;

        const newOptionDesc = document.createElement("option");
        newOptionDesc.textContent = `Temple ${key} descending`;
        newOptionDesc.value = `Temple${key}descending`;
        newOptionAsc.className = key;

        selectSort.appendChild(newOptionAsc);
        selectSort.appendChild(newOptionDesc);
      }
    }
  }
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
