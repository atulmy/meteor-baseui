// Widgets Modal Bottomsheet

// Helper
Template.widgetsModalBottomsheet.helpers({

});

// Events
Template.widgetsModalBottomsheet.events({

});

// On Render
Template.widgetsModalBottomsheet.rendered = function () {
    console.log('R - Template.widgetsModalBottomsheet.rendered');

    $( function() {
        App.init();

        App.Widgets.Modal.bottomsheet();
    });
};