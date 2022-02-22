//Provided Code by SpringBoard
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// CONVERTED TO ES2015

const double = (arr) => arr.map((val) => val * 2)

// Provided Code by SpringBoard
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

// CONVERTED TO ES2015

const squareAndFindEvens = (numbers) => {
    const squares = numbers.map((num) => num ** 2);
    return squares.filter((square) => square % 2 === 0);
}