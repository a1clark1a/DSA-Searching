const binarySearch = require('./BinarySearch')

function main() {
    
    const sorted = [3,5,6,8,11,12,14,15,17,18]; 
    
    //With a size 10, BS cuts it in half so starts at index 5 = 12
    //since value is lower than 12, searches at the left of the array.
    //with a size of 5 cuts in half at index 2 = 6
    //since value is greater than 6, searches right of the array
    //with a size of 2 cut in half at index 3 = 8
    //value is found return index = 3
   // console.log(binarySearch(sorted, 8)) 
    
    
    console.log(binarySearch(sorted, 16))
     //With a size 10, BS cuts it in half so starts at index 5 = 12
    //since value is greater than 12, searches at the right of the array.
    //with a size of 5 cuts in half at index 8 = 17
    //since value is lower than 17, searches left of the array
    //with a size of 4 cut in half at index 6 = 14
    //since value is greater than 14, searches right of the array
    //with a size of 2 cut in half at index 7 = 15;
    //since no value return -1;
    
}

main();