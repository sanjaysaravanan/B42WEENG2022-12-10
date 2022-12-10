var x = 100;

let y = 200;

const z = 99;

// Regarding Declaration and Initiailization
// var, let
// delaration and initialization can be sone separately/ at the same line

  // var a = 100;
  // let b = 200;

  // or 

  var a = 10;
  let b;

  a = 100;
  b = 200;


  // Redeclaration is not possible for let, const since they are block scoped

  const i = 100; // const delaration and initialization should be ini single line
  const j = 200; 

// Scope: global, block/function
// var globally scoped/accessed
// var x = 100;

// {
//   var x = 99;
// }

// console.log(x); // correct: 99

// let
// let x = 100;

// {
//   let x = 99;
//   console.log('block value', x);
// }

// console.log(x); // correct: 100


// const
// const x = 100;

// {
//   const x = 99;
//   console.log('block value', x);
// }

// console.log('global value', x);


// without block redeclaration
// var x = 100;

// {
//   x = 99;
// }

// console.log(x); // correct: 99

// let
// let x = 100;

// {
//   x = 99;
// }

// console.log(x); // correct: 99
