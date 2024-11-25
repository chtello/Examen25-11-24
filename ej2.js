function sumMatrix(mtrz) {
    if (mtrz.length == 0) {
        return 0;
    }else{
        return mtrz[0].reduce((sum, num) => sum + num, 0) + sumMatrix(mtrz.slice(1));
    }

}
console.log(sumMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
