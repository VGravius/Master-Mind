// for (var i = 0; i < 8; i++) {
//   var hashes = "#".repeat(i + 1);
//   var spaces = " ".repeat(8 - i - 1);
//   console.log(hashes + spaces);
// }

// for (var i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i + " = FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log(i + " = Fizz");
//   } else if (i % 5 == 0) {
//     console.log(i + " = Buzz");
//   } else {
//     continue;
//   }
// }

// for (var i = 0; i < 8; i++) {
//   if (i % 2 == 0) {
//     console.log("# # # #");
//   } else {
//     console.log(" # # # #");
//   }
// }

// var square = function(x) {
//     return x * x;
// };

// console.log(square(12));

function num(a, b) {
    if (a < b) return a;
    else if (a > b) return b;
    else return null;
}
console.log(num(3, 3));