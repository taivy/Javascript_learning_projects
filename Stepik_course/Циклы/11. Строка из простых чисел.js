function testCycle(n) {
    var res = [];
    var p = 2;
    for (i = 2; i < n; i++) {
        res.push(true);
    }
    for (; (Math.pow(2, n) < n); ) {
        for (i = p; i < res.length; i++) {
            if (res[i] % p == 0) {
                res[i] = false;
            }
        }
        for (i = p; i < res.length; i++) {
            if (res[i] != false) {
                p = i;

            }
        }
    }

    return res;

}