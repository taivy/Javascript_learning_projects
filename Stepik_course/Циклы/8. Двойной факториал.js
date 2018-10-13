function testCycle(n) {
    var x = n;
    for (var i = n-2; i > 0;) {
        x *= i;
        i -= 2;
    }
    return x;
}