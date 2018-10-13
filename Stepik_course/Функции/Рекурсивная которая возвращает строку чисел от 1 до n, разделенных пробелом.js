function my_function(n) {
    if (n == 1) {
        var str = 1 + ' ';
        return str;
    }
    else {
        str = my_function(n-1);
        str += n + ' ';
    }
    return str;
}


