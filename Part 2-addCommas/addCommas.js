function addCommas(num) {
    // make a reverse array of the absolute value of the 'num'
    let split = (""+Math.abs(num)).split("").reverse();

    // check if 'num' is negative
    // add negative sign into string if 'num' is negative
    let str = num < 0 ? "-" : "";
    
    // start building string of 'num'
    for(let i = split.length - 1; i >= 0; i--){
        str += split[i];
        // add comma into string in correct location
        if(i % 3 === 0 && i !== 0){
          str += ",";
        }
    }

  return str;
}

module.exports = addCommas;