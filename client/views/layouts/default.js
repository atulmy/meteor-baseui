// Pages Home

// Helper
Template.layoutsDefault.helpers({

});

// Events
Template.layoutsDefault.events({

});

// On Render
Template.layoutsDefault.rendered = function () {
    console.log('R - Template.layoutsDefault.rendered');

    $( function() {
        $('#app-wrapper').transition({ x: 0 });


    });
};