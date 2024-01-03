// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// }
const person: {
  // The following aren't required to be placed here as they are inferred by TS:
  name: string;
  age: number;
  hobbies: string[];
  // The following is not inferred by TS and is requred to be placed here:
  role: [number, string]; // tells TS that we want an array with 2 values, one a number and one a string
} = {
  name: "Gabrielle",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

// Tuple would be perfect to take care of and orevent the following scenario if it is undesirable:
person.role.push("admin"); // pushing is an exception to TS, it does not prevent it despite the array being a fixed length
// If the role array is defined and contains more than the specified length, an error will be thrown by TS
// person.role[1] = 10;

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); error! because TS detects that hobby is a string and therefore does not allow non-string methods to be performed on it
}
