function testCycle(k, n) {
    var x;
    x = '';
    for (var i = 1; i <= k; i++) {
        x += n + ' ';
    }
    return x;
}