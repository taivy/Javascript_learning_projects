function testCycle(n) {
    var a = 0;
    var b = 1;
    for (var i = 0; i < n - 1; i++) {
        var tmp = a;
        a = b;
        b = b + tmp;

    }
    return b;
}