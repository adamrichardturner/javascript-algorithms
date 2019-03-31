
function confirmEnding(str, target) {
    var targetLength = target.length;
    var targetCheck = str.substr(-targetLength);
    if(targetCheck === target) {
        return true;
    } else {
        return false;
    }
}
confirmEnding("Bastian", "n");