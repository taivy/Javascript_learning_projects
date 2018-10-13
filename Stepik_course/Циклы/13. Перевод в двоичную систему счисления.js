function testCycle(n) {
    var x = '';
    var rem = n;
    var bin = '';
    while (rem != 1) {
        bin += rem % 2;
        rem = Math.trunc(rem / 2);
    }
    bin += 1;
    for (var i = bin.length - 1; i >= 0; i--) {
        x += bin[i];
    }
    return x;
}