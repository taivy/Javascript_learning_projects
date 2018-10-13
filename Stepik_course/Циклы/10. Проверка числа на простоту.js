function testCycle(n) {
    var x;
    x = true;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            x = false;
        }
    }
    if (x === false) {
        return 'Составное число';
    } else {
        return 'Простое число';
    }
    return x;
}