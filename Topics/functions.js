function greet() {
    console.log("Hello, World!");
}

//Functions with Parameters
function greeting(myname) {
    console.log("Hello, " + myname);

}

function areaOfTriangle(base, height) {
    let answer = (base*height)/2;
    console.log("The area of the triangle is : "+ answer);
}
function areaOfCircle(radius) {
    let answer = 22/7 * radius ** 2;
    console.log("The area of the circle is  "+ answer + " metre squared.");
}

//  Functions with return values

function areaOf Circle(radius){
    const pi = 3.142
    let answer = pi*radius**2;
    return answer
}

//ARROW FUNCTIONS
const newgreeting = (myname) => {
    console.log("Hello, " + myname);
}