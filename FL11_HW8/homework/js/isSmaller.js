let isSmaller = (num1, num2) => {
    let isBigger = () => {
        return num1 > num2;
    }
    return !isBigger
}

isSmaller(5, -1)