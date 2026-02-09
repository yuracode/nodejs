const students = [
    { name: 'Alice', age: 10 },
    { name: 'Bob', age: 20 },   
    { name: 'Catherine', age: 30 }
];
console.log(students[1].name); // Bob

const nameArray = students.map(function(person){
    return person.name;
});

console.log(nameArray); // [ 'Alice', 'Bob', 'Catherine' ]

const under20 = students.filter(function(person){
    return person.age < 20;
});

console.log(under20); // [ { name: 'Alice', age: 10 } ]