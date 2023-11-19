
function findIndexOfSubArray(arr) {
   // implementation here.
  function sortArray(boolean){
    let sorted_array = [...arr].sort((a, b) => boolean ? b - a : a - b)
    let m = 0,n = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== sorted_array[i]) {
        m = i
        break
      }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== sorted_array[i]) {
        n = i
        break
      }
    }
    return [m,n]
  }

   //return [m, n] //m, n are the indics of the subarray to be found
  const allEqual = arr => arr.every( v => v === arr[0] )
  if(allEqual(arr) == true){
    return [0,0]
  }else if(arr.toString() === arr.slice().sort((a, b) => a - b).toString() || arr.toString() === arr.slice().sort((a, b) => b - a).toString()){
    return [0,0]
  }else if (arr[0] === Math.max(...arr) || arr[arr.length - 1] === Math.min(...arr)) {
    return sortArray(true)
  } else {
    return sortArray(false)
  }
  }
 