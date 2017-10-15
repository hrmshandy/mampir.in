window.pad = (num) => {
    let s = num+"";
    if(s.length < 2) {
        return "0"+s;
    }

    return s;
}

window.currencyFormat = (nStr, t = '.') => {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + t + '$2');
    }
    return x1 + x2;
}