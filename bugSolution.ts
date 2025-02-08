function combine(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"]; 

const combined = combine(arr1, arr2); 
console.log(combined); 