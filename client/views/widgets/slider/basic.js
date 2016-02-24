// Widgets Slider

// Helper
Template.widgetsSlider.helpers({

});

// Events
Template.widgetsSlider.events({

});

// On Render
Template.widgetsSlider.rendered = function () {
    console.log('R - Template.widgetsSlider.rendered');

    $( function() {
        App.init();

        App.Widgets.slider('.slider', '.slider-item');
    });



};