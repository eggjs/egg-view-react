'use strict';

function getFront(mainStr, searchStr) {
  const foundOffset = mainStr.indexOf(searchStr);
  if (foundOffset === -1) {
    return null;
  }
  return mainStr.substring(0, foundOffset);
}

function getEnd(mainStr, searchStr) {
  const foundOffset = mainStr.indexOf(searchStr);
  if (foundOffset === -1) {
    return null;
  }
  return mainStr.substring(foundOffset + searchStr.length, mainStr.length);
}

exports.insertString = function(mainStr, searchStr, insertStr) {
  const front = getFront(mainStr, searchStr);
  const end = getEnd(mainStr, searchStr);
  if (front !== null && end !== null) {
    return front + insertStr + searchStr + end;
  }
  return null;
};
