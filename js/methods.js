// String methods

const text = 'Hello World'

// console.log(text.length) // length of string
// console.log(text.toUpperCase()) // change string to uppercase
// console.log(text.toLowerCase()) // change string to lowercase

// class MyString {
//     constructor(text) {
//       this.text = text;
//     }

//     lowerCase() {
//       return this.text.toLowerCase()
//     }

//     upperCase() {
//       return this.text.toUpperCase()
//     }
//   }

// mystring = new MyString(text)
// console.log(mystring.lowerCase()) // change string to uppercase
// console.log(mystring.upperCase()) // change string to uppercase

// Number methods
const num = 3.14

// console.log(typeof(num.toString())) // converts number to string

// const x = '3.14'
// console.log(parseFloat(x)) // converts string to float

// const y = '300'
// console.log(parseInt(y)) // converts string to float

// Arrays methods
let colors = ['red', 'blue', 'green']
const numbers = [2, 4, 6, 8]

let cars = ['Toyota', 'BMW', 'Nissan']
cars.push('Tesla') // adding a new item to the end of the array
// console.log(cars)

cars.pop() // removing the last item
console.log(cars)

cars[1] = 'Honda' // changing item
console.log(cars)

delete cars[0] // deleting item
console.log(cars)

console.log(colors.sort()) // sorting items
