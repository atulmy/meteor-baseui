// Widgets Tab

// Helper
Template.widgetsTab.helpers({

});

// Events
Template.widgetsTab.events({

});

// On Render
Template.widgetsTab.rendered = function () {
    console.log('R - Template.widgetsTab.rendered');

    $( function() {
        App.init();

        App.Widgets.tab();
    });
};