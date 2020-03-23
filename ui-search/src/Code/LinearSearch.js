//Simple linear search algorithm finding the index of an array given, the value

//Best case is O(1);
//Average case is O(n);
//Worst case is O(n);
function indexOf(array, value){
    for(let i = 0; i< array.length; i++){
        if(array[i] == value){
            return i;
        }
    }
    return -1;
}

export default indexOf;