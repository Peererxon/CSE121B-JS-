let currentDateAndTime = Date();

console.log("It is now " + currentDateAndTime);

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("The total is " + theTotal);

function total(...theNumbers) {
  let sum = 0;
  for (let aNumber of theNumbers) {
    // problem was iterating in the key of the array rather than the value
    // for "in" instead of for "of"
    sum += aNumber;
  }

  /* const sumatory = theNumbers.reduce(
    (prev, cureent) => (cureent = prev + cureent),
    0
  ); */ // I prefer in this way hehe
  return sum;
}
