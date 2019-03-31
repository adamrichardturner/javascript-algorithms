function titleCase(str) {
    var lowerStr = str.toLowerCase();
    var splitStr = lowerStr.split(' ');
    var upperCase = [];
    var mergedCase = [];
    for(i=0; i < splitStr.length; i++) {
        upperCase = splitStr[i].charAt(0).toUpperCase();
        theRest = splitStr[i].substr(1);
        mergedCase.push(upperCase + theRest);
    }
    return(mergedCase.join(' '));
}
titleCase("I'm a little tea pot");
