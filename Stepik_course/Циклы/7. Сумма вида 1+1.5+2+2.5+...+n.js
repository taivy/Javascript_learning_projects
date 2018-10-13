function testCycle(n) {
    var x = 0;
    for (i = 1; i < n; i++) {
        x += i + i + 0.5;
    }
    x += n;
    return x;
}