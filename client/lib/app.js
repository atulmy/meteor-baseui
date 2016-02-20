App = {
    init: function() {
        // Common Page Animation
        $('.content').transition({ opacity: 1 });

        // Scroll top
        $('#app-content').scrollTop(0);

        // Focused state remove
        $('body').removeClass('focused');
    },

    layoutInit: function() {
        $('#app-wrapper').transition({ x: 0 });

        // Menu
        $(document).on('click', '.menu-show', function() {
            $('.menu').transition({ left: '0px' }, 500, 'snap');
        });
        $(document).on('click', '.menu, #app-content', function() {
            $('.menu').transition({ left: '-200px' }, 500, 'snap');
        });

        // Focused state for input (hide footer)
        var selector = "input[type='text'], textarea, input[type='password'], input[type='email'], input[type='number']";
        $(document).on('focusin', selector, function() {
            $('body').addClass('focused');
        });
        $(document).on('blur', selector, function() {
            $('body').removeClass('focused');
        });
    }
};