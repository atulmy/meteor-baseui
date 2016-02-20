// Pages Home

// Helper
Template.pagesHome.helpers({

});

// Events
Template.pagesHome.events({

});

// On Render
Template.pagesHome.rendered = function () {
    console.log('R - Template.pagesHome.rendered');

    $( function() {
        App.init();
    });
};