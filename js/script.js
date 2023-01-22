'use strict';

// Task #1
const user = {
    name: 'John',
    surname: 'Smith'
};
user.name = 'Pete';
delete user.name;
console.log(user);

// Task #2
const userr = {
    name: 'John'
  };
  
  // это будет работать? 
  
  userr.name = 'Pete';

  // yes, it will work

// Task #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);