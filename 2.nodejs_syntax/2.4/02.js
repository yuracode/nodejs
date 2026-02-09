function printName(){
    console.log('printName this.name' ,this.name);
}

const obj = {
    name: 'my-name',
    printName: printName
};

obj.printName();
