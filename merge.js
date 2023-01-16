const exampleArray = [5, 1, 3, 7];

// On this side is the merge sort algorithm

// Works with recursion

function mergeSort (array) {

    if (array.length === 1) return array;
    
    //Just continue if the array items is more than 1
    
    const mid = Math.floor(array.length/2);

    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid+1, array.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const arraySorted = mergeSort(exampleArray);








// This is where the magic borns

function merge(arrayA, arrayB){


}