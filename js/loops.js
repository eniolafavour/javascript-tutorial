// For loop
/*
for (expression 1; expression 2; expression 3) {
    write some code here
  }
*/

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// While loop
/*
while (condition) {
  do something
}
*/

// let i = 0
// while (i < 5) {
//   console.log(i)
//   i = i + 1
// }


// Do-While loop
/*
do {
    do something
}
while (condition)
*/

let i = 0
do {
  i = i + 1
  document.getElementById('demo').innerHTML = i
  console.log(i)
}
while (i < 5)