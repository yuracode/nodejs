function printName(){
    setTimeout(function(){
        console.log('printName this.name' ,this.name);
    }.bind(this), 1000);
}

const obj = {
    name: 'my-name',
    printName: printName
};

obj.printName();    // my-name