let cities = ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Thika", "Kitale"];

for(i of cities){
    console.log(i);
}

for(let city = 0; city <= 6; city ++)
{
    console.log(cities[city])
}

let fruits = ["Apple", "Banana", "Orange", "Cherry"];

// Add elements to an array

fruits.push("Mango");
console.log(fruits);

fruits.unshift("Strawberry");
console.log(fruits);


// Remove elements from the array
fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);


// Iterate Over Array
for (let fruit of fruits){
    console.log(fruit);

}

// Finding an element

console.log(fruits.indexOf("Banana"));