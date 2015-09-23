function evenFib(x) {
    var sum = 0;
    var i, a = 1, b = 2;
    
    while (b < x) {
        if (b % 2 === 0) {
            sum += b;
        }
        i = a;
        a = b;
        b += i;
    }
    return sum;
}

evenFib(4000000);