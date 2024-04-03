const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// create a variable totalBatteries
// this will take an array of numbers
// create a callback function
// set accumulator and element as parameters for adding the values
// set return to accumulator + element
let totalBatteries = batteryBatches.reduce (function(accumulator, element) {
    return accumulator + element;},0);// set the start as 0 to include the first value
