let arr = Array.from({ length: 5 });

let arr1 = arr.map((_, index) => index);

let arr2 = arr.map((_, index) => index + 1).map((item) => item);

console.log(arr1, arr2);
console.log("asdas");
