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

            gatherNewPosData(ui.item.index());
            scanAllElementsPosition();
            replacePlacedElPositionData();
            packPositionData();
        }
    });
};

function newElementCreation (draggable) {
                if (draggable.attr('id') == 'newEl') {
                    if (!((draggable.parent().data('row') == 0) && (draggable.parent().data('column') == 0))) {
                        //change the id of the current element
                        jQuery(draggable).attr('id', '');
                        jQuery(draggable).attr('data-id', '');
                        //Create another el.
                        $('.colsFill').prepend('<div class="el default ui-draggable ui-draggable-handle inRows" id="newEl" data-id="z">Create new</div>');
                    };
                };
            };

/* context menu*/
function contextMenuFunc() {
    $(function() {
        let clickedOn;
        let colVal;
        $('.el').mousedown(function() {
            clickedOn = this;
        });
        $.contextMenu({
            selector: '.el',
            reposition: false,
            events: {
                show : function() {
                        applyRadiosOnClick(clickedOn);
                    }
            },
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m);
            },
            items: {
                "editor": {
                    "name": "Go to element editor",
                    callback: function() {
                        $("#elEditorLink")[0].click();
                    }
                },

                "saveTheme": {
                    "name": "Save theme",
                    callback: function() {
                        //future theme functionality
                    }
                },

                "theme select": {
                    "name": "Select theme >",
                    "items": {
                        "theme green": {
                            "name": "Green",
                            callback: function() {
                                console.log("green theme selected");
                            }
                        },
                        "theme blue": {
                            "name": "Blue",
                            callback: function() {
                                console.log("blue theme selected");
                            }
                        },
                        "theme red": {
                            "name": "Red",
                            callback: function() {
                                console.log("red theme selected");
                            }
                        }
                    }
                },

                "elem color": {
                    "name": "Change element color >",
                    "items": {
                        "make default": {
                            "name": "Default",
                            callback: function() {
                                $(clickedOn).removeAttr('style');
                            }
                        },
                        "picker": {
                            "name": "pick a color",
                            "type": "html",
                            "html": "<input type='color' id='picker'></input>",
                        },
                        "apply": {
                            "name": "Apply",
                            callback: function() {
                                pickerColor(clickedOn);
                            }
                        }
                    }
                },

                "collapsed": {
                    "name": "Collapse options >",
                    "items" : {
                        'radioCollapsed': {
                            name: "Collapsed", 
                            type: 'html', 
                            html: '<input type="radio" id="collapsed" value="true" data-collapsed="true" name="collapse"><label for="collapsed">Collapsed</label>'
                        },
                        'radioNotCollapsed': {
                            name: "Not collapsed", 
                            type: 'html', 
                            html: '<input type="radio" id="notCollapsed" value="false" data-collapsed="false" name="collapse"><label for="notCollapsed">Not collapsed</label> '
                        },
                        "apply": {
                            "name": "Apply",
                            callback: function() {
                                //send radio data
                                radioCollapsed(clickedOn);
                            }
                        }
                    }
                }
            }
        });
    });
};
/* END context menu*/

/* resizable*/
function resizable() {
    $('.resizable').resizable({//actually for grid editor functionality

        resize: function(event, ui) {

            selectedColSizeWpx = $(this).css('width');
            selectedColSizeHpx = $(this).css('height');
            let selectedColParentSizeHpx = $(this).parent().css('height');


            let selectedColSizeW = parseInt(selectedColSizeWpx, 10);
            let selectedColSizeH = parseInt(selectedColSizeHpx, 10);
            let selectedColParentSizeH = parseInt(selectedColParentSizeHpx, 10);


            let allOtherCols = $(this).siblings();

            let allOtherRows = $(this).parent().siblings();

            let selectedRow = $(this).parent();


            allOtherCols.css('height', selectedColSizeH); //make all the colls heigth change simultaniously
            selectedRow.css('height', selectedColSizeH); // fixes the issue with blank space with rezised columns

            allOtherCols.css('width', function() { //makes other columns change width so it all comes to 100% of screen width
                let eachColWidth = (($(window).width() - 1) - selectedColSizeW) / allOtherCols.length;
                return eachColWidth;
            });

            allOtherRows.css('height', function() { //same, but with rows and height
                let eachRowHeight = (($(window).height() - 1) - selectedColSizeH) / allOtherRows.length;
                return eachRowHeight;
            });
        }
    });
};
/* END resizable*/

/* END basic page functionality*/

$(document).ready(function () {
    getPosition();
    getStyleData();

    droppableSortable();
    contextMenuFunc();

    resizable();
});
