/*server requests*/
function getPosition() {
    $.get("http://localhost:3000/get", function (data, status) {
        positionReceived = fixAnyJsonData(data);

        cutRecievedPosition();
        placeEls();
    });
};

function getStyleData() {
    $.get("http://localhost:3000/getStyleData", function (data, status) {
        styleReceived = fixAnyJsonData(data);

        applyStyleData(styleReceived);
        createStyleData(styleReceived);
    });
};

/* END server requests*/

function fixAnyJsonData(d) {
    $.each(d, function (k) {
        d = JSON.parse(k);
    });
    return d;
};