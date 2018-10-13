function testCycle(a, b) {
    var x;
    x = '';
    for (var i = a; i <= b; i++) {
        x += i + ' ';
    }
    return x;
}