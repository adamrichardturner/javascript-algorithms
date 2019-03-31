
function rot13(str) { // LBH QVQ VG!
    var arr = str.split("");
    var result = '';
    var charCode = 0;
    for(i = 0; i < arr.length; i++) {
        if(/^[a-zA-Z]+$/.test(arr[i])) {
            charCode = arr[i].charCodeAt();
            if (charCode < 78) {
                charCode += 13;
                result += String.fromCharCode(charCode);
            } else if (charCode >= 78) {
                charCode -= 13;
                result += String.fromCharCode(charCode);
            }
        } else {
            result += arr[i];
        }
    }
    return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
