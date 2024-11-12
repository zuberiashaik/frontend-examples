function greet(user) {
    //return "Hello World!";
    return `Hello ${user}`;
}
let user = "riya";
let str = greet(user);
console.log(str);


let g = (user) => {
    console.log("Hello " + user);
    return 1;
}
console.log(g('abc'));