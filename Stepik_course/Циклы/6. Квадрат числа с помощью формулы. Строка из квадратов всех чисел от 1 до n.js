function testCycle(n) {
    var x;
    x = '';
    y = 0;
    for (i = 1; i <= n; i++) {
        y += 2 * i - 1;
        x += y + ' ';
    }
    return x;
}