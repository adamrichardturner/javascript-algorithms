function frankenSplice(arr1, arr2, n) {
    let arr3 = [...arr1];
    let arr4 = [...arr2];
    arr4.splice(n, 0, ...arr3);
    return arr4;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);