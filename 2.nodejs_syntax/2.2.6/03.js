const add = function(a, b) {
    return a + b;
}  

const value = add(3, 4);
console.log(value); // 7

setTimeout(function(){
    console.log('ls');
}, 1000);

(function(){
    console.log('executed');
})();