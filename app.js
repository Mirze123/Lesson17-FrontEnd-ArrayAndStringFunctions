const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/// foreach loop deyil iteratordu

// numbers.forEach((val, idx) => console.log(idx));
// const filteredArray = numbers.filter(number => number > 5);
// console.log(filteredArray);
// const mappedArray = numbers.map(x=>{
//     let newX = x*2;
//     let newString = "salam" + newX;
//     return newString;
// });

// console.log(mappedArray);

// numbers.push(10);
// console.log(numbers);
// const removedNumber =  numbers.pop();
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

let persons = [
    {
        name: "Mirza",
        age: 25
    },
    {
        name: "Mirza1",
        age: 17
    },
    {
        name: "Mirza2",
        age: 23
    },
    {
        name: "Mirza3",
        age: 25
    },
    {
        name: "Mirza4",
        age: 38
    },
    {
        name: "Mirza5",
        age: 47
    },
    {
        name: "Mirza6",
        age: 29
    },
]

// console.log(persons);

// const filteredPersons = persons.filter(person => person.age > 30 );
// console.log(filteredPersons);

// persons = persons.filter(person => person.age !== 38);
// console.log(persons);

// persons.push(
//     {
//         name:"Perviz",
//         age:23
//     }
// );

// console.log(persons);

// persons.every()

// const result =  numbers.every(number => number > 0);
// console.log(result);

// const result = numbers.some(number=>number === -5);
// console.log(result);


// function reverseString(str) {
//     return Array.from(str).reverse().join('');
// }

// function isPalindrome(str){
//     return Array.from(str).reverse().join('') === str;
// }

// console.log(isPalindrome('naqan1'));

// const result =  numbers.includes(100);
// console.log(result);

// let item1 = [1,2,3];
// let item2 = [4,5,6];
// let item3 = [7,8,9];

// const myArray = [];
// myArray.push(item1,item2,item3);
// console.log(myArray);

//  const result = myArray.includes(item1);
//  console.log(result);