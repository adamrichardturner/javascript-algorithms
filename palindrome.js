
function palindrome(str) {
    var lowerForward = str.toLowerCase();
    var cleanLowerForward = lowerForward.replace(/[^0-9a-z]/gi, '');
    var formattedForward = cleanLowerForward.replace(/[.,\s]/g);
    var formattedForwardSplit = formattedForward.split('');
    var reversed1 = formattedForwardSplit.reverse();
    var reversedFinal = reversed1.join('');
    if (reversedFinal === formattedForward) {
        console.log("True");
        return true;
    } else {
        console.log("False");
        return false;
    }
}
palindrome("A man, a plan, a canal. Panama");
