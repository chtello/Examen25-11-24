    function findMax(arr) {
        if (i == arr.length) {
            return may
        }
        if (arr[i] > may ) {
            may = arr[i]
        }
        i ++
        return findMax(arr)  
    }
    let may = 0
    let i = 0
    console.log(findMax([1,23,4,3]))