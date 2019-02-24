/* position data*/
function cutRecievedPosition() {//apply received data into ourElements data object
    $.each(positionReceived, function (index, value) {
        ourElements.push(new ElementData(value.id, value.row, value.column, value.position));
    });
    //console.log(ourElements);
};

function placeEls() {//needs to be changed
    for(let i = 0; i < ourElements.length; i++){
        $(`#col0`).append(ourElements[i].html);
    };
};

/* END position data*/
