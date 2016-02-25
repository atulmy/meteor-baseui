// Widgets Slider Fullscreen

// Helper
Template.widgetsSliderFullscreen.helpers({

});

// Events
Template.widgetsSliderFullscreen.events({

});

// On Render
Template.widgetsSliderFullscreen.rendered = function () {
    console.log('R - Template.widgetsSliderFullscreen.rendered');

    $( function() {
        App.init();

        App.Widgets.slider('.slider', '.slider-item');

        // Hammer JS actions
        $('.slider .slider-item').hammer().bind('tap press pinch rotate', function(event) {
            console.log(event);

            $(event.target).find('span').append('You '+event.type+'ed <br/>');
        });
    });
};