
function mutation(arr) {
    var checkItem = arr[0].toLowerCase().split('');
    var scanItem = arr[1].toLowerCase().split('');
    for(i = 0; i < scanItem.length; i++) {
        if(checkItem.indexOf(scanItem[i]) === -1) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

mutation(["hello", "Hello"]);