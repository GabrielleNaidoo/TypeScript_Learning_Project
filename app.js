// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// }
// const person: {
//   // The following aren't required to be placed here as they are inferred by TS:
//   name: string;
//   age: number;
//   hobbies: string[];
//   // The following is not inferred by TS and is requred to be placed here:
//   role: [number, string]; // tells TS that we want an array with 2 values, one a number and one a string
// }
var person = {
    name: "Gabrielle",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};
// Tuple would be perfect to take care of and orevent the following scenario if it is undesirable:
// person.role.push("admin"); // pushing is an exception to TS, it does not prevent it despite the array being a fixed length
// If the role array is defined and contains more than the specified length, an error will be thrown by TS
// person.role[1] = 10;
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); error! because TS detects that hobby is a string and therefore does not allow non-string methods to be performed on it
}
