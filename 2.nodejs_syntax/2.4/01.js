console.log(this === global); // true

function isGlobal() {
    console.log(this === global); // true
}   

isGlobal();

function printName(){
    console.log('printName this.name' ,this.name);
}

printName();