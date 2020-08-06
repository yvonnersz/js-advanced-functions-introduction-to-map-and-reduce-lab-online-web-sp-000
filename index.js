// Your code here

function mapToNegativize(array) {
  let newArray = []
  for (let number of array) {
    const timesNegative = number*(-1)
    newArray.push(timesNegative)
  }
  return newArray
}


function mapToNoChange(array) {
  return array
}

function mapToDouble(array) {
  let newArray = []
  for (let number of array) {
    const timesTwo = number*(2)
    newArray.push(timesTwo)
  }
  return newArray
}

function mapToSquare(array) {
  let newArray = []
  for (let number of array) {
    const square = number*(number)
    newArray.push(square)
  }
  return newArray
}

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === false) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      return true
    }
  }
  return false
}

function reduceToTotal(array, startingPoint = 0) {
    array.forEach(n => startingPoint += n);
    return startingPoint;
}
