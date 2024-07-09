
exports.PI = 3.14,
exports.min = () => {
    var min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach((e) => {
        if(e < min) {
            min = e;
        }
    });
    return min;
}
exports.max = () => {
    var max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach((e) => {
        if(e > max){
            max = e;
        }
    });
    return max;
}
