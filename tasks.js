// sum all elements of any array;
// eger arrayin her hansisa bir elementi number deyilse
// geriye -1 qaytar;

const sumAll = (arr) => {
    if (!arr.every(x => typeof x === "number")) {
        throw new Error("Array does not contain any number");
    }
    return arr.reduce((prev,curr) => prev + curr,0);
}

console.log(sumAll([1, 2, 3, 4, 5,'1']));