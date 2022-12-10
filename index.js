// const x = 10; // ---> declaration and initialization

// // const ---> keyword
// // x --> variable

// function someFunc(element) {
//   return element;
// }


// // function, return ----> keyword
// // someFunc, element ---> user defined 

// const obj = {
//   name: 'sanjay'
// }


// console.log('Hello ', obj);

// const a = 10;
// const b = 100;
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(a,b));


// Load all the countries data from the restcountries.com
//  (https://restcountries.com/v3.1/all) and show in the console

// Step 1:
// Creating an XMLHttpRequest Object ( Has the capablity to load data from server )
const countriesRequest = new XMLHttpRequest();

// Step 2: Configuration
countriesRequest.open('GET', 'https://restcountries.com/v3.1/all');

// Step 3: Make the Request
countriesRequest.send();

// Step 4: Get the data in Your desired format
countriesRequest.onload = function () {
  const countries = JSON.parse(countriesRequest.responseText);
  // country
  /**
   * {
   * flag: 'FL',
   *  name: {
   *    common: 'India'  
   *  }
   * }
   */
  // {name} {Flag}

  // forEach
  // countries.forEach(function displayCountryInfo(country) {
  //   // console.log(country['name']['common'], country['flag']);
  //   console.log(country.name.common, country.flag);
  // });

  // for...in
  // for(var index in countries) {
  //   console.log(countries[index].name.common, countries[index].flag);
  // }

  // for...in
  for(var country of countries) {
    console.log(country.name.common, country.flag);
  }

}






