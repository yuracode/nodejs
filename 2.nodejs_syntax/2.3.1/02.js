function People(name){
    this.name = name;
}

People.prototype.printName = function(){
    console.log(`Hello, my name is ${this.name} .`);
}
const foo = new People('foo-name');
foo.printName(); // Hello, my name is foo-name .
