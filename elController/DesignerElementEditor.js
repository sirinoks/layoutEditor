/* basic page functionality*/
function droppableSortable() {
    $('.slot').droppable({
        drop: function(event, ui) {

            const container = $(this);

            ui.draggable.detach().appendTo(container);

            column = container.data("column");
            row = container.data("row");

            children = container.children();
            id = ui.draggable.data('id');

            if (container.hasClass('colsFill')) {//if the element is in the list, make it small
                ui.draggable.addClass('inRows');
            } else {
                ui.draggable.removeClass('inRows');
            };

            newElementCreation(ui.draggable);
        }
    }).sortable({
        connectWith: '.slot',
        placeholder: 'sortHelper',
        start: function(event, ui) {
            ui.item.toggleClass("sortHelper");
        },
        stop: function(event, ui) {
            ui.item.toggleClass("sortHelper");

            //log the position
            const children = ui.item.parent().children();
            console.log("Position " + ui.item.index() + " out of " + (children.length - 1));
        }
    });
};

function newElementCreation (draggable) {
    if (draggable.attr('id') == 'newEl') {
        if (!((draggable.parent().data('row') == 0) && (draggable.parent().data('column') == 0))) {
            //change the id of the current element
            jQuery(draggable).attr('id', `elCreated`);
            jQuery(draggable).attr('data-id', `${idNo+1}`);
            idNo++;

            //Create another el.
            $('.colsFill').prepend('<div class="el ui-draggable ui-draggable-handle inRows" id="newEl" data-id="z">Create new</div>');
            newElementNaming();
        };
    };
};

/* END basic page functionality*/

/* New element editing*/
function newElementNaming() {
    $('#root').on('click', '#elCreated', function () {//when you click a new element
        if (clicked == true) {
            return;
        };

        clicked = true;
        let defaultName = $(this).text();
        $(this).html(`<input type='text' value='${defaultName}' id='currentName'>`);//replace it with input
        newElementInputSaving();
    });
};

function newElementInputSaving() {
    $('#currentName').focusin(function () {
        $('#currentName').keypress(function (e) {//if you press enter while you're editing a new element
            console.log('check');
            const key = e.which;
            if (key == 13) {
                console.log('enter');

                let nameInput = $('#currentName').val();
                //replace the input back to the element text, applying the typed text to the new element
                $('#currentName').parent().parent().append(`<div class="el ui-draggable ui-draggable-handle" id="elCreated" data-id="${idNo+1}">${nameInput}</div>`);
                $('#currentName').parent().remove();
                clicked = false;
                console.log(clicked);
            };
        });
    });
};
/* END New element editing*/

$(document).ready(function () {
    droppableSortable();
    newElementNaming();

    getPosition();
    getStyleData();
});
