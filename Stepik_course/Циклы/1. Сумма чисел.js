function testCycle(n) {
    var x;
    x = 0;
    for (var i = 1; i <= n; i++) {
        x += i;
    }
    return x;
}