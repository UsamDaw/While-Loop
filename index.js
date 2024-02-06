/*
Task 1
var num = 0;
while (num < 51) {

    console.log(num);
    num++;
}
*/

/*
Task 2
var num = 1; 
while (num<=100) {
  if(num%2==0)

  console.log(num);
  num++;
}
*/

/*
Task 3
var num = 1; 
while (num<=999) {
  if(num%3==0)

  console.log(num);
  num++;
}
*/

/*
Task 4
var num = 15;
while (num<=1005) {
    if (num%3 == 0 && num %5 == 0)

    console.log(num);
    num++;
}
*/

/*
Task 5
var sum = 0;
var num = 1;
while (num <= 100) {
    sum += num;

    console.log(num);
    num++;
}
*/

/*
Task 6
var hashtag = "";
let i = 0;
while (i < 5) {
    hashtag += `#`;

    console.log(hashtag);
    i++;
}
*/

/*
Task 7
var hashtag = "";
let i = 0;
while (i < 50) {
    hashtag += `#`;

    console.log(hashtag);
    i++;
}
*/

var divide1 = "Fizz"
var divide2 = "Buzzz"
var i = 0;
while (i <= 100) {
    
    if (i%5===0 && i%3 ===0) {console.log("FizzBuzz");}
    else if (i%3===0) {console.log("Fizz");}
    else if (i%5===0) {console.log("Buzz");}
    i++;
}
