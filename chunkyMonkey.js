
function chunkArrayInGroups(arr, size) {
    var newArray = [];
    for(i = 0; i < arr.length; i += size) {
        newArray.push(arr.slice(i, i + size));

    }
    console.log(newArray);
    return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);