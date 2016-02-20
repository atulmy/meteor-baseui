// Pages About

// Helper
Template.pagesAbout.helpers({

});

// Events
Template.pagesAbout.events({

});

// On Render
Template.pagesAbout.rendered = function () {
    console.log('R - Template.pagesAbout.rendered');

    $( function() {
        App.init();
    });
};