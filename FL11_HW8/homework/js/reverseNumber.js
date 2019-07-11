function reverseNumber(n) {
    var x = 0;
    if (n > 0) {
        while (n > 0) {
            x = x * 10 + n % 10;
            n = ~~(n / 10);
        }
        return x
    } else {
        n *= -1
        while (n > 0) {
            x = x * 10 + n % 10;
            n = ~~(n / 10);
        }
        return x * -1
    }
}

reverseNumber(123);
reverseNumber(-456); 
reverseNumber(10000);