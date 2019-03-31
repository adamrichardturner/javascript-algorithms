
function truncateString(str, num) {
    var checkLength = str.length;
    if(checkLength > num && num > 3) {
        var strSliced = str.slice(0, num -3);
        console.log(strSliced + "...");
        return(strSliced + "...");
    } else if (checkLength > num && num <= 3) {
        var strSliced = str.slice(0, num);
        console.log(strSliced + "...");
        return(strSliced + "...");
    }
    return str;
}

truncateString("A-", 1);