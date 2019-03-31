
function getIndexToIns(arr, num) {
    arr.sort(function(a, b){return a - b});

    for(var i=0; i < arr.length; i++) {
        if(arr[i] >= num) {
            console.log(i);
            return i;
        }
    }
    console.log(arr.length);
    return arr.length;
}

getIndexToIns([3, 10, 5], 3);