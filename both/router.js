// Route Configurations
Router.configure({
    layoutTemplate: 'layoutsDefault',
    loadingTemplate: 'commonLoading'
});

// Pages
    // Home
    Router.route('/', {
        name: 'pages_home',
        template: 'pagesHome'
    });

    // About
    Router.route('/about', {
        name: 'pages_about',
        template: 'pagesAbout'
    });

    // Contact
    Router.route('/contact', {
        name: 'pages_contact',
        template: 'pagesContact'
    });

// Blog
    // Write
    Router.route('/blog/write', {
        name: 'blog_write',
        template: 'blogWrite'
    });

    // Latest
    Router.route('/blog/latest', {
        name: 'blog_latest',
        template: 'blogLatest'
    });

    // Trending
    Router.route('/blog/trending', {
        name: 'blog_trending',
        template: 'blog_trending'
    });

    // Read
    Router.route('/blog/read', {
        name: 'blog_read',
        template: 'blogRead'
    });

// User
    // Login
    Router.route('/user/login', {
        name: 'user_login',
        template: 'userLogin'
    });

    // Register
    Router.route('/user/register', {
        name: 'user_register',
        template: 'userRegister'
    });

    // Profile
    Router.route('/user/profile', {
        name: 'user_profile',
        template: 'userProfile'
    });

    // Edit
    Router.route('/user/edit', {
        name: 'user_edit',
        template: 'userEdit'
    });

// Widgets
    // List
    Router.route('/widgets', {
        name: 'widgets',
        template: 'widgets'
    });
    // Modal
        // Basic
        Router.route('/widgets/modal', {
            name: 'widgets_modal',
            template: 'widgetsModal'
        });
        // Bottomsheet
        Router.route('/widgets/bottomsheet', {
            name: 'widgets_modal_bottomsheet',
            template: 'widgetsModalBottomsheet'
        });
    // Slider
        // Basic
        Router.route('/widgets/slider', {
            name: 'widgets_slider',
            template: 'widgetsSlider'
        });
        // Fullscreen
        Router.route('/widgets/slider/fullscreen', {
            name: 'widgets_slider_fullscreen',
            template: 'widgetsSliderFullscreen'
        });

// Optional Styles
    // List
    Router.route('/optional', {
        name: 'optional',
        template: 'optional'
    });
    // Colors
    Router.route('/optional/colors', {
        name: 'optional_colors',
        template: 'optionalColors'
    });