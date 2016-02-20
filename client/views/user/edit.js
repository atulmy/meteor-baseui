// User Edit

// Helper
Template.userEdit.helpers({

});

// Events
Template.userEdit.events({

});

// On Render
Template.userEdit.rendered = function () {
    console.log('R - Template.userEdit.rendered');

    $( function() {
        App.init();
    });
};