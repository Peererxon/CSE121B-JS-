/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

// Step 3: declare and instantiate a variable to hold the current year

// Step 4: place the value of the current year variable into the HTML file

// Step 5: declare and instantiate a variable to hold the name of your picture

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

function main() {
  const name = "Anderson Gil";
  const currentYear = new Date().getFullYear();
  const picture = "images/me.jpg";
  //assignations
  document.querySelector("#name").textContent = name;
  document.getElementById("year").textContent = currentYear;
  document.querySelector("img").setAttribute("src", `${picture}`);

  //arrays

  let favoriteFoods = ["pasticho", "spagethi", "soup", "sandwich"];
  const extraFood = "pizza";
  //assignations
  document.querySelector("#food").textContent = favoriteFoods;
  favoriteFoods.push(extraFood);
  document.querySelector("#food").textContent = favoriteFoods;

  //removing element
  favoriteFoods.shift(); //removing first element
  document.querySelector("#food").textContent = favoriteFoods;
  favoriteFoods.pop(); // last element
  document.querySelector("#food").textContent = favoriteFoods;
}

main();

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

// Step 2: place the values of the favorite foods variable into the HTML file

// Step 3: declare and instantiate a variable to hold another favorite food

// Step 4: add the variable holding another favorite food to the favorite food array

// Step 5: repeat Step 2

// Step 6: remove the first element in the favorite foods array

// Step 7: repeat Step 2

// Step 8: remove the last element in the favorite foods array

// Step 7: repeat Step 2
