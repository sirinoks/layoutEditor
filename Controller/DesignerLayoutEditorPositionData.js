/* position data*/
function gatherNewPosData(pos) {
    fullPosData = new ElementData(id, row, column, pos);
};

function scanAllElementsPosition() {
    for (m = 0; m < ourElements.length; m++) {
        let selectedContainer = $(`*[data-id="${m + 1}"]`).parent();
        let selectedChildren = selectedContainer.children();

        let v3index = selectedChildren.index($(`*[data-id="${m + 1}"]`));

        ourElements[m].position = v3index;
    };
};

function replacePlacedElPositionData () {
    for (j in ourElements) {
        if (id == ourElements[j].id) {
            ourElements[j].id = fullPosData.id;
            ourElements[j].row = fullPosData.row;
            ourElements[j].column = fullPosData.column;
            ourElements[j].position = fullPosData.position;
        };
    };
};

function packPositionData() {
    let updatedPosition = new Array();

    for (let i = 0; i < ourElements.length; i++) {
        updatedPosition.push(new ElementData(ourElements[i].id, ourElements[i].row, ourElements[i].column, ourElements[i].position).GetPositionDataToSend());
    }
    sendPosition(updatedPosition);
};

function cutRecievedPosition() {//apply received data into ourElements data object
    $.each(positionReceived, function (index, value) {
        ourElements.push(new ElementData(value.id, value.row, value.column, value.position));
    });
};

function placeEls() {
    let ourDat = Sort_by_position(ourElements);
    for(let i = 0; i < ourDat.length; i++){
        $(`div[data-row='${ourDat[i].row}'][data-column='${ourDat[i].column}']`).append(ourDat[i].html);
    };
    ourElements = Sort_by_id(ourElements);
};

function Sort_by_position(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i].position > x[i + 1].position) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
};

function Sort_by_id(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i].id > x[i + 1].id) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
};

function removeAllels() {
    $('.cols').children().remove();
};
/* END position data*/
