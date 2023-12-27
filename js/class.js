/*
class ClassName {
    //  some codes here
  }
*/

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return this.firstName + " " + this.lastName
  }

  email() {
    return this.firstName.toLowerCase() + '.' + this.lastName.toLowerCase() + '@gmail.com'
  }
}


student = new Student('John', 'Terry', 25)
console.log(student.age);