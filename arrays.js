var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var array2 = [element, ...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [element, ...array]
  return array
}
