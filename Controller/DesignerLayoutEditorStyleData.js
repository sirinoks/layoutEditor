/* style data*/
function applyStyleData(dat) {//applies background color of elements based on recieved data
    $.each(dat, function (index, value) {
        //background color
        $('.el[data-id=' + '"' + (index + 1) + '"]').css('background-color', `${value.backgroundColor}`);
    });
};

function applyRadiosOnClick(selectedEl) {
    let selId = Number($(selectedEl).attr('data-id'))-1;

    //console.log(elementsStyle[selId].collapsed);
    if (elementsStyle[selId].collapsed == "true") {
        let radioTrue = $('input[data-collapsed="true"]');
        radioTrue.prop('checked', true);
        console.log(radioTrue);
    } else {
        let radioFalse = $('input[data-collapsed="false"]');
        radioFalse.prop('checked', true);
        console.log(radioFalse);
    };
};

function createStyleData(data) {
    $.each(data, function (index, value) {
        elementsStyle.push(new Style(value.collapsed, value.backgroundColor, value.fontColor, value.borderColor, value.itemCount, value.itemSize, value.columnWidth));
    });
};

function packStyleData() {
    const els = $('.el');
    els.each(function (index, value) {
        let currentId = parseInt($(this).attr("data-id"));
        let bgColor = elementsStyle[currentId].backgroundColor;
        $(this).css("background-color", bgColor);
    });
};

function pickerColor(selectedEl) {//applies a chosen background color to the clicked element
    const picker = $('#picker');

    $(selectedEl).css('background-color', `${picker[0].value}`);

    replaceStyleData(selectedEl, picker[0].value);
};

function radioCollapsed(selectedEl) {//functionality of changing collapsed option
    let findChecked = $('input[name="collapse"]:checked').val();

    let selId = $(selectedEl).attr('data-id');

    $.each(elementsStyle, function (index, value) {
        if(index+1 == selId) {
            value.collapsed = findChecked == "true";
            console.log(elementsStyle);
        }
    });
    sendStyleData(JSON.stringify(elementsStyle));
};

function replaceStyleData(selectedEl, newValue) {

    let selId = $(selectedEl).attr('data-id');

    $.each(elementsStyle, function (index, value) {
        if(index+1 == selId) {
            value.backgroundColor = newValue;
            console.log(value);
            console.log(value.backgroundColor);
        }
    });
    sendStyleData(JSON.stringify(elementsStyle));
};
/* END style data*/