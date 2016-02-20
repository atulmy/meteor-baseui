// Blog Read

// Helper
Template.blogRead.helpers({

});

// Events
Template.blogRead.events({

});

// On Render
Template.blogRead.rendered = function () {
    console.log('R - Template.blogRead.rendered');

    $( function() {
        App.init();

        // Animations
        $('.title').transition({ scale: 1 });
    });
};