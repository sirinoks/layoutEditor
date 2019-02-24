/* style data*/
function applyStyleData(dat) {//applies background color of elements based on recieved data
    $.each(dat, function (index, value) {
        //background color
        $('.el[data-id=' + '"' + (index + 1) + '"]').css('background-color', `${value.backgroundColor}`);
    });
};

function createStyleData(data) {
    $.each(data, function (index, value) {
        elementsStyle.push(new Style(value.collapsed, value.backgroundColor, value.fontColor, value.borderColor, value.itemCount, value.itemSize, value.columnWidth));
    });
};
/* END style data*/