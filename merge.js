const exampleArray = [5, 1, 3];

// This is where the magic borns

function merge(arrayA, arrayB){

    const sorted = [];

    let i = 0;
    let j = 0;

    while (i < arrayA.length && j < arrayB.length){
        if(arrayA[i] < arrayB[j]){
            sorted.push(arrayA[i]);
            i++;
        }else {
            sorted.push(arrayB[j]);
            j++;
        }
    }

    while(i < arrayA.length){
        sorted.push(arrayA[i]);
        i++;
    }

    while(j < arrayB.length){
        sorted.push(arrayB[j]);
        j++;
    }

    return sorted;

}

// On this side is the merge sort algorithm

// Works with recursion

function mergeSort (array) {

    if (array.length === 1) return array;
    
    
    const mid = Math.floor(array.length/2);
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid, array.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

console.log(mergeSort(exampleArray));


