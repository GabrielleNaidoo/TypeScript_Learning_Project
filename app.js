// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// }
var person = {
    name: "Gabrielle",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"],
};
// Tuple would be perfect to take care of and orevent the following scenario if it is undesirable:
person.role.push("admin"); // pushing is an exception to TS, it does not prevent it despit the array being a fixed length
// person.role[1] = 10;
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); error! because TS detects that hobby is a string and therefore does not allow non-string methods to be performed on it
}
