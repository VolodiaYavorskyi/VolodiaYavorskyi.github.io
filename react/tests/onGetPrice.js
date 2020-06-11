function onGetPrice(a, b) {
    if (a.length != 0 && b.length != 0) {
        return String(Math.floor(Math.random() * Math.floor(100)));
    }
    else {
        return "";
    }
}

module.exports = onGetPrice;