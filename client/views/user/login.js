// User Login

// Helper
Template.userLogin.helpers({

});

// Events
Template.userLogin.events({

});

// On Render
Template.userLogin.rendered = function () {
    console.log('R - Template.userLogin.rendered');

    $( function() {
        App.init();

        // Animations
        $('.title').transition({ scale: 1 });
    });
};