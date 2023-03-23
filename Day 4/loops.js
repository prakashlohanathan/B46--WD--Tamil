let myArray = [1,2,3,4,5];
myArray[2] = 6;
myArray[5] = 7;
console.log(myArray);
console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
console.log(i);
}
for(let j=0;j<myArray.length;j++){
    let k = j*2;
    console.log(k);
}