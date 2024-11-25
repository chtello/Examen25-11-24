function flattenMatrix(mtrz) {
    if (mtrz.length == 0) {
        return []
    }
    const [first, ...rest] = mtrz;
    if (Array.isArray(first)) {
        return[...flattenMatrix(first), ...flattenMatrix(rest)];
    }else{
        return[first, ...flattenMatrix(rest)]
    }
}
console.log(flattenMatrix([[1, 2], [3, 4], [5, 6]]));