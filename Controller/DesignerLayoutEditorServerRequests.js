/*server requests*/
function getPosition() {
    $.get("http://localhost:3000/get", function (data, status) {
        positionReceived = fixAnyJsonData(data);
        removeAllels();
        cutRecievedPosition();
        placeEls();
    });
};

function sendPosition(posDat) {
    posDat = JSON.stringify(posDat);
    $.post("http://localhost:3000/post", posDat);
};

function getStyleData() {
    $.get("http://localhost:3000/getStyleData", function (data, status) {
        styleReceived = fixAnyJsonData(data);

        applyStyleData(styleReceived);
        createStyleData(styleReceived);
    });
};

function sendStyleData(styDat) {
    $.post("http://localhost:3000/postStyleData", styDat);
};
/* END server requests*/

function fixAnyJsonData(d) {
    $.each(d, function (k) {
        d = JSON.parse(k);
    });
    return d;
};