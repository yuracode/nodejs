function setName(obj){
    obj.name = 'Bob';
}

const person = {name: 'Alice'};
console.log(person.name); // Alice

setName(person);
console.log(person.name); // Bob
