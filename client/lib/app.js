App = {
    init: function() {
        // Common Page Animation
        $('.content').transition({ opacity: 1 });

        // Scroll top
        $('#app-content').scrollTop(0);

        // Menu
        $('.menu-show').on('click', function() {
            $('.menu').transition({ left: '0px' });
        });
        $('.menu').on('click', function() {
            $('.menu').transition({ left: '-200px' });
        });

        // Focused state for input (hide footer)
        $('body').removeClass('focused');
        var selector = "input[type='text'], textarea, input[type='password'], input[type='email'], input[type='number']";
        $(selector).focusin(function() {
            $('body').addClass('focused');
        });
        $(selector).blur(function() {
            $('body').removeClass('focused');
        });
    }
};