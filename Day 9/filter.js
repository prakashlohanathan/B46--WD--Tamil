let numbers = [1,2,3,4,5,6,7,8];

function filterer(value) {
    if (value % 2 != 0) return true;
    if(value <=5) return false;
    return value <= 5; 
}
    
    console.log(numbers.filter(filterer)); // [1, 3, 5, 7]