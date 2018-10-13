function testDateTime(a, b) {
    a = new Date(a);
    b = new Date(b);
    var date = (a > b) ? a : b;
    var day = date.getDay();
    switch (day) {
        case 0:
            return 'Воскресенье';
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        default:
            return (Nan);
    }
}




