function testCycle(n) {
    var s = 0;
    for (var i = String(n).length; i >= 0; i--) {
        a = n / Math.pow(10, i - 1);
        b = Math.trunc(a);
        n -= Math.trunc(Math.pow(10, i-1) * b);
        s += b;

    }
    return s;
}