//Binary search version of indexOf



//Best case is O(1)

/*With each iteration, you can cut the area you have to search in half; 
this means that the worst and average-case running times are both O(log(n)). */
//average case O(log(n))
///Worst case O(log(n))

//The function takes 4 arguments - the array, the value to search for, and optional start and end indices.
function binarySearch(array, value, start, end){
    //If these are omitted then the function uses the start and end of the array. 
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    
    //f the start index is greater than the end index then clearly the value hasn't been found so you return -1
    if(start > end){
        return -1;
    }
    
    //Next, you pick an index in the middle of the start and end indices and check the item at that index.
    const index = Math.floor((start + end) / 2);
    const item = array[index]
    
    console.log(start, end);
    //If the item is equal to the value then you have found the correct index.
    if(item == value){
        return index;
    }
    
    /*Otherwise, you recursively search in either the left half or right half of the sorted array depending on
     whether the item was less than or greater than the value. */
    else if(item < value){
        return binarySearch(array, value, index + 1, end);
    }
    else if(item > value){
        return binarySearch(array, value, start, index -1);
    }
}