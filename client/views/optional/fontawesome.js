// Optional Fontawesome

// Helper
Template.optionalFontawesome.helpers({

});

// Events
Template.optionalFontawesome.events({

});

// On Render
Template.optionalFontawesome.rendered = function () {
    console.log('R - Template.optionalFontawesome.rendered');

    $( function() {
        App.init();
    });
};