
function reverseString(str) {
    var chars = str.split('');
    var rev = chars.reverse();
    return rev.join('');
}

reverseString("hello");