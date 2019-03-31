function findLongestWord(str) {
    var strArray = str.split(' ');
    var newArray = [];
    for (i=0; i < strArray.length; i++) {
        newArray.push((parseInt(strArray[i].length)));
    }
    return (Math.max.apply(null, newArray));
}

findLongestWord("The quick brown fox jumped over the lazy dog");