// User Register

// Helper
Template.userRegister.helpers({

});

// Events
Template.userRegister.events({

});

// On Render
Template.userRegister.rendered = function () {
    console.log('R - Template.userRegister.rendered');

    $( function() {
        App.init();

        // Animations
        $('.title').transition({ scale: 1 });
    });
};