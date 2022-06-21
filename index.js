let isNumber = require('is-number');
module.exports = function reverse(inputArr, startingIndex, endIndex) {
  if (!Array.isArray(inputArr)) {
    throw new Error('expected the first argument to be an array');
  }

  let arrayLen = inputArr.length;
  if (arrayLen === 0) {
    return null;
  }

  startingIndex = isNumber(startingIndex) ? startingIndex : 0;
  endIndex = isNumber(endIndex) ? endIndex : arrayLen-1;
  if(endIndex<startingIndex){
    throw new Error('endIndex can not be smaller than starting index');
  }
  if(endIndex>=arrayLen || endIndex<0 || startingIndex>=arrayLen || startingIndex<0){
    throw new Error('array index out of bound');
  }
  if (startingIndex === endIndex) {
    return inputArr;
  }

  let result = new Array(arrayLen);
  let itr=0;
  let itrResult=0;
  while (itrResult<startingIndex) {
    result[itrResult] = inputArr[itr];
    itr++;
    itrResult++;
  }
  itr=endIndex;

  while(itrResult<=endIndex){
    result[itrResult] = inputArr[itr];
    itr--;
    itrResult++;
  }
  endIndex++;
  while(itrResult<arrayLen){
    result[itrResult] = inputArr[endIndex];
    itrResult++;
    endIndex++;
  }
  return result;
};
