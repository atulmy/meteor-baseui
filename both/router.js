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
    // Profile
    Router.route('/user/profile', {
        name: 'user_profile',
        template: 'userProfile'
    });

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