function largestPrimeFactor(n) {
    for (i = 2; i < n; i++) {
        if(n % i === 0) {
            n /= i;
        }
    }
    console.log(n);
}

largestPrimeFactor(600851475143);