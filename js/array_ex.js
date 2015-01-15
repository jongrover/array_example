$(function(){

  // ARRAYS

  //create an empty array
  var problems = [];

  //create an array (list of simmiliar type variables).
  var fruits = ["Orange", "Banana", "Pear"];

  console.log(fruits[0]) // give us elements value based index position.

  // Push new elements into an existing array.
  fruits.push("Tiger");

  //remove from last index
  fruits.pop();

  console.log(fruits);

  //remove items from specific location.
  // ["Orange", "Banana", "Pear"]
  fruits.splice(2,1);

  //add items at specific location.
  // ["Orange", "Banana"]
  fruits.splice(1,0,"Watermellon");

  console.log(fruits);

  //replace an item at specific location.
  // ["Orange", "Banana", "Watermellon"]
  fruits.splice(1, 1, "Strawberry");

  console.log(fruits);

  //sort and reverse fruits
  var fruits = fruits.sort().reverse();

  console.log(fruits);

  //get the length of an array
  console.log(fruits.length);

  // LOOPS

  // For Loop
  for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]+" is yummy!");
  }

  // jQuery each loop.
  $.each(fruits, function(index, fruit) {
    console.log(fruit+" is yummy!");
  });

  //filtering results.
  var all_bananas = $.grep(fruits, function (fruit) {
    return fruit === "Banana";
  });

  console.log(all_bananas); //match bananas

  //report the number of matches
  console.log(all_bananas.length);

});