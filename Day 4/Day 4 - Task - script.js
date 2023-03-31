// 1. How to compare 2 JSON have the same properties without order?
// function isSame(keys1, keys2) {
//          for (let key of keys1) {
//              if (!keys2.includes(key)) return false;
//          }
    
//         for (let key of keys2) {
//              if (!keys1.includes(key)) return false;
//          }
    
//         return true;
//      }
    
//      let obj1 = { name: 'person 1', age: 12 };
//      let obj2 = { age: 12, name: 'person 1' };
    
     
//      if (isSame(Object.keys(obj1), Object.keys(obj2))) {
//         console.log('same keys');
//      } else {
//          console.log('different keys');
//      }
// 4. Task 1

//console.log("hello world");

// var myvar = 1;
// console.log("myvar");

//  var firstname = "Prakash";
//  var lastname = "Lohanathan";
//  var maritalstatus = "Single";
//  var country = "India";
//  var age = 25;
// console.log(firstname);
// console.log(lastname);
// console.log(maritalstatus);
// console.log(country);
// console.log(age);

// var firstname = "Prakash";
// var lastname = "Lohanathan";
// var maritalstatus = "Single";
// var country = "India";
// var age = 25;
// console.log(firstname,lastname,maritalstatus,country,age);

// let name = 'chandy';
// let hasAdhaar = true;
// let myvoderId;
// let myNull = null;

// console.log(name,hasAdhaar,myvoderId,myNull);

// string to Integer  -  parseInt()


// Task - 2 

//1. Square of a number

// let number = 5;
// number = number **2;
// console.log(number);

//2. Swapping 2 numbers

// let number = 2;
// console.log(number);
//  number = 5;
//  console.log(number);

//3. Addition of three no.

// let no1 = 5;
// let no2 = 2;
// let no3 = 10;
// console.log(no1+no2+no3);

//4. Celsius to Fahrenheit conversion
    // F = C*(9/5)+32

    // let C = 25;
    // let F = C*(9/5)+32;
    // console.log(F);

 //5. Meter to miles
 //meter (m) = 0.00062137 miles (mi)

//  let meter = 1000;
//  let miles = 0.00062137 * meter;
//  console.log(miles);

//6. Pounds to Kg
// kg = Pound / 2.2046
// let P = 100;
// let Kg = (P / 2.2046);
// console.log(Math.round(Kg));

//7. Calculate Batting Average

// let Sc1 = 97;
// let Sc2 = 54;
// let Sc3 = 34;
// let Sc4 = 108;
// let BattingAvg =((Sc1+Sc2+Sc3+Sc4)/4)); 
// console.log(BattingAvg);

//8. Calculate five test scores and print their average

// let Sc1 = 97;
//  let Sc2 = 54;
//  let Sc3 = 34;
//  let Sc4 = 108;
//  let Sc5 = 65;
//  let BattingAvg =((Sc1+Sc2+Sc3+Sc4+Sc5)/5); 
//  console.log(BattingAvg);

// 9. Power of any No.

// let X = 5;
// let Y = 5;
// let Power = X ** Y;
// console.log(Power);

//10. Calculate Simple Interest

// let P = 1000;
// let N = 3;
// let R = 5;
// let SI = ((P*N*R)/100);
// console.log(SI);

//11. Calculate area of an equilateral triangle

// A = ((1.732/4 )* a*2)

// let a = 5;
// let A = ((1.732/4 )* a*2);
// console.log(A);

//12. Area Of Isosceles Triangle
// A = 1/2 * b * h 

// let base = 6;
// let height = 10;
// let A = (1/2 * base * height);
// console.log(A);

//13. Volume Of Sphere
// v = (4/3 * 3.14 * r**3)
// let r = 5;
// let v = (4/3 * 3.14 * r**3);
// console.log(Math.round(v));

//14. Volume Of Prism
// v = length * width * height
// let l = 10;
// let w = 6;
// let h = 15;
// let v = (l * w * h);
// console.log(v);

//15. Find area of a triangle.

// A = 1/2 * b * h

// let b = 5;
// let h = 10;
// let A = (1/2 * b * h);
// console.log(A);

//16. Give the Actual cost and Sold cost, Calculate Discount Of Product

// let Actualcost = 100;
// let soldcost = 75;
// let Discount = ((Actualcost - soldcost) / soldcost)*100;
// console.log(Discount);

//17. Given their radius of a circle and find its diameter, circumference and area.

// let radius = 10;
// let diameter = 2 * radius;
// let circumference = 2*3.14*radius;
// let area = 3.14* radius**2;
// console.log(diameter,circumference,area);

//18. Given two numbers and perform all arithmetic operations.

// let a = 10;
// let b = 20;
// let add = (a+b);
// let sub = (a-b);
// let mul = (a*b);
// let div = (a/b);
// let modulus = (a % b);
// let exp = (a ** b);
// let z = a++;
// let increment = a;
// let y = b--;
// let decrement = b;
// console.log(add,sub,mul,div,modulus,exp,increment,decrement);

//19. Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
// let n =5;
// let string = "";
// for (let i=0; i <n; i++){
//     for (let j=0; j<n; j++){
//         string+= "*"
//     }
//     string+= "\n";
// }
// console.log(string);

//20. Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour 
//daily for one month. Calculate the total energy bill of 
//that consumer if per unit rate is 10?

// let consumes = 100;//watt per hr
// let monthconsumes =24*30;// per month
// let perunitrate = 10;
// let totalenergyconsumed = consumes * monthconsumes * perunitrate;
// console.log(totalenergyconsumed);

//21. Program To Calculate CGPA

// let English = 9.1  
// let Hindi = 8.5  
// let Maths = 9.5  
// let Science =9.6;  
// let SocialStudy = 8.6  
// let CGPA = (9.1+8.5+9.5+9.6+8.6)/(5.0)  
// let CGPAper = 9.5 * (CGPA)  
// console.log(CGPAper);  
  
// Task 3

// 1. write a loop that makes seven calls to console.log to output the following triangle:

// let n=8;
// for (let i = "#"; i.length < n; i += "#")
// console.log(i.length);

// 2. Iterate through the string array and print it contents
// var strArray= ["<option>Jazz</option>",
//       ,"<option>Blues</option>",
//       ,"<option>New Age</option>",
//       ,"<option>Classical</option>",
//       ,"<option>Opera</option>"]

//       console.log(strArray);

//3. write a code to count the elements in the array . Don’t use length property

// var array=[11,22,33,44,55];
// let length = 0;
// for (let index = 0; array[index] != undefined; index++){ 
//  length++;
// }
// console.log(length);
//4. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

        //   let foods=[];
        //   console.log(foods);

//5.Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
//Find the length of your foods array 
    // let foods=["a1","b1","c1","d1","e1","f1","g1","h1","i1","j1","k1","l1","m1","n1","o1","p1","q1","r1","s1","t1"];

    // console.log(foods[4]);

//6. Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

// let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
    
// const newfriends = friends.map(element => {
//   if (element === friends[0]) {
//     return friends[3];
//   }
//   return element;
// });

// console.log(newfriends); 
// console.log(friends) 

//7. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
//  let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

// for(let index= 0; index < friends.length-CaptainAmerica; index++){
    
//    console.log(friends[index]);
//   }   


//8. Find the person is ur friend or not.

 //const friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran'];
    
//     function dataHandling(input, name){
//     for (var i = 0; i < input.length; i++) {
//     } }
//     let found = dataHandling(friends,'Mari');
//     console.log(found);
//  const friends = [
//          "Mari",
//          "MaryJane",
//          "CaptianAmerica",
//          "Munnabai",
//          "Jeff",
//          "AAK chandran"];

// function areFriends(friends, friend) {
//      return friends.includes(friend);
    
//         let isFriend = false;
    
//         for (let name of friends) {
//              if (name == friend) isFriend = true;
//          }
//          return isFriend;
//      }
    
//      console.log(areFriends(friends, 'Jeff'));

//9. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

//let friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
//let friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
// ((friends1, friends2) => {
//     let middle = friends1.length;
     
//      let totalArray = friends1.concat(friends2).sort((a, b) => a - b);
    
//      console.log(totalArray);
//      })(["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"],["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"]);  
//----------------------------------------------------------------------------

// 1. Get the first item, the middle item and the last item of the array

// let arr = ["1","2","3","4","5"];
//     console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

//2. Add your name to the end of the friends array, and add another name to beginning.

// let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
// console.log(friends.length);
// friends.unshift('John');
// friends.push('prakash');
// console.log(friends);

// 3. Add Mr or Ms to the names in the friends array.

// const friends = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"
// ];

// const gender = [
//     "Female",
//     "Female",
//     "Male",
//     "Female",
//     "Male",
//     "Male"
// ];
// for (let index = 0; index < friends.length; index++){
//     if (gender[index] == "Male") {
//         console.log("Mr." + friends[index])
//     } else {
//         console.log("Ms." + friends[index]);
//     }
// }


// 4. Concat all the names the friends array and return as comma “,” seperated string.

// let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

// console.log(friends.toString());

//5. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

// const friends = [
//         "Mari",
//         "MaryJane",
//         "CaptianAmerica",
//         "Munnabai",
//         "Jeff",
//         "AAK chandran"
//      ];
//      arrayLength = friends.length;
//      joined      = friends.join('');
//      result = joined.length / arrayLength;
//      console.log(result);

//6. Find the names and return the list starting with letter M.

// const friends = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"];
//  let input = "M";
//  let filterdNames = friends.filter(name => name.startsWith(input));
// console.log(filterdNames);


//7. Find the name with max characters and return the name.

// function longest_str_in_array(friends)
//   {
//     var max_str = friends[0].length;
//     var ans = friends[0];
//     for (var i = 1; i < friends.length; i++) {
//         var maxi = friends[i].length;
//         if (maxi > max_str) {
//             ans = friends[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["Mari",
// "MaryJane",
// "CaptianAmerica",
// "Munnabai",
// "Jeff",
// "AAK chandran"]));

//9. Find the name with min characters and return the name.
// const friends = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"];
// console.log(
//     friends.reduce((a, b) => a.length <= b.length ? a : b)
//   );

//10. Find the average in the array below.
// Make sure you add only the numbers and do avg.

// const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', 200, 'CaptianAmerica', 8, 10];
// var sum = 0;
// friendsInfo.forEach(function(num) { sum += num });
// average = sum / friendsInfo.length;
// console.log(average);

//11. Print the contents of the input variable

// var input = [
// ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
// ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
// ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
// ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']];

// console.log(input[0],input[1],input[2],input[3]);

//12. Objects:
// What the output

//myobject = {1:one,'11':1,'name':'arun'}
//console.log(myobject.11); 
//console.log(myobject.name);

//13. Write out an object literal to represent the data below.

// Guvi, Geek, 6, IIT-M RP,Chennai.

// let learningCenter = {name: "Guvi",lastname: "Geek",no: 6, place: "IIT-M RP,Chennai"};

// console.log(learningCenter);

