function testCycle(a, b) {
    var x;
    x = '';
    if (a > b) {
        for (var i = b; i <= a; i++) {
            x += i + ' ';
        }

    } else {
        for (var i = a; i <= b; i++) {
            x += i + ' ';
        }
    }
    return x;
}