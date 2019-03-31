
function destroyer(arr) {
    var args = arr.slice.call(arguments);
    args.shift();
    arr = arr.filter(function(item) {
        return !args.includes(item);
    });
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);