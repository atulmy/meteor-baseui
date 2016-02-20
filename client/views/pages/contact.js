// Pages Contact

// Helper
Template.pagesContact.helpers({

});

// Events
Template.pagesContact.events({

});

// On Render
Template.pagesContact.rendered = function () {
    console.log('R - Template.pagesContact.rendered');

    $( function() {
        App.init();
    });
};