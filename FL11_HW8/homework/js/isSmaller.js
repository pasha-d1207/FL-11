function isSmaller(num1, num2) {
    let isBigger = function isBigger() {
        return num1 > num2
    }
    return !isBigger
}

isSmaller(5,-1)