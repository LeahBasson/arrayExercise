//Question 1 & 2

let data = ['Leah', 4, 6, 9, 11, 'Basson', 19];
console.log("Array:", data);

//Question 3
// console.log('Question 3:')
// let numbers = number();
// function number(){
//     data.forEach((value) => {
//         if (!isNaN(value)){
//             console.log(value)
//         }    
//     })
// };

console.log('Question 3:')
let numbers = data.forEach((value) => {
    if(typeof value == 'number'){
        console.log(value)
    }  
});

// Question 4
console.log('Question 4:', data.find(value => value == 11));

//Question 5
console.log('Question 5:', data.indexOf(9));

//Question 6
console.log('Question 6:')

function sum (...data){
    let digit= [];
    data.forEach((value) => {
        if(!isNaN(value)){
            digit.push(value)
        }
    })
    console.log(digit)
    console.log(digit.reduce((c,n) => c+n));
}

sum('Leah', 4, 6, 9, 11, 'Basson', 19)

//Question 7
const arr1 = ["Apple", "Orange"];
const arr2 = ["Banana", "Peach", "Watermelon"];
const fruits = arr1.concat(arr2);
console.log('concat:', fruits);

const dogs = new Array("German Shepherd", "Poodle", "Dachshund");
console.log('New Array:', dogs)

//Question 8
console.log('Question 8:',data.slice(1, 4)) 












