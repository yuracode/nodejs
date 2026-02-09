class People {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Hello, my name is ${this.name} .`);
    }
}

const foo = new People('foo-name');
foo.printName(); // Hello, my name is foo-name .