App = {
    init: function() {
        // Common Page Animation
        $('.fadein').transition({ opacity: 1 });

        // Scroll top
        $('#app-content').scrollTop(0);

        // Focused state remove
        $('body').removeClass('focused');

        // Modal backdrops
        $('.modal-backdrop').remove();
        $('.modal-bottomsheet-backdrop').remove();
    },

    layoutInit: function() {
        $('#app-wrapper').transition({ scale: 1 }, 500, 'snap');

        // Menu
        $(document).on('click', '.menu-show', function() {
            $('.menu').transition({ x: 0 }, 500, 'snap');
            $('.menu-backdrop').transition({ x: 0 }, 0, function() {
                $('.menu-backdrop').transition({ opacity: 1 }, 500, 'snap');
            });
        });
        $(document).on('click', '.menu, .menu-backdrop', function() {
            $('.menu').transition({ x: -210 }, 500, 'snap');
            $('.menu-backdrop').transition({ opacity: 0 }, 300, 'snap', function() {
                $('.menu-backdrop').transition({ x: '100%' }, 0);
            });
        });

        // Focused state for input (hide footer)
        var selector = "input[type='text'], textarea, input[type='password'], input[type='email'], input[type='number']";
        $(document).on('focusin', selector, function() {
            $('body').addClass('focused');
        });
        $(document).on('blur', selector, function() {
            $('body').removeClass('focused');
        });
    },

    Widgets: {
        Modal: {
            basic: function () {
                $('.modal-backdrop').remove();
                $('#app-wrapper #app-content').append('<div class="modal-backdrop"></div>');

                $('.modal-activate').on('click', function () {
                    var modal = $(this).attr('modal');

                    $('#' + modal).transition({ y: 0, scale: 0.5 }, 0, function() {
                        $('#' + modal).transition({ scale: 1, opacity: 1 }, 500, 'snap');
                    });

                    $('.modal-backdrop').transition({ y: 0 }, 0, function() {
                        $('.modal-backdrop').transition({ opacity: 1 }, 300, 'snap');
                    });
                });

                $('.modal-close, .modal-backdrop').on('click', function () {
                    $('.modal').transition({ opacity: 0, scale: 0.5 }, 500, 'snap', function() {
                        $('.modal').transition({ y: 'calc(100%)', scale: 1 }, 0);
                    });

                    $('.modal-backdrop').transition({ opacity: 0 }, 300, 'snap', function() {
                        $('.modal-backdrop').transition({ y: '100%' }, 0);
                    });
                });
            },

            full: function () {
                $('.modal-full-activate').on('click', function () {
                    var modal = $(this).attr('modal-full');
                    $('#' + modal).transition({ y: 0, opacity: 1 }, 500, 'snap');
                });

                $('.modal-close').on('click', function () {
                    $('.modal-full').transition({ y: 'calc(100%)', opacity: 0 }, 500, 'snap');
                });
            },

            bottomsheet: function () {
                $('.modal-bottomsheet-backdrop').remove();
                $('#app-wrapper #app-content').append('<div class="modal-bottomsheet-backdrop"></div>');

                $('.modal-bottomsheet-activate').on('click', function () {
                    var modal = $(this).attr('modal-bottomsheet');
                    $('#' + modal).transition({y: 0, opacity: 1}, 500, 'snap');

                    $('.modal-bottomsheet-backdrop').transition({ y: 0 }, 0, function() {
                        $('.modal-bottomsheet-backdrop').transition({ opacity: 1 }, 300, 'snap');
                    });
                });

                $('.modal-bottomsheet-close, .modal-bottomsheet-backdrop').on('click', function () {
                    $('.modal-bottomsheet').transition({y: '100%', opacity: 0}, 500, 'snap');

                    $('.modal-bottomsheet-backdrop').transition({ opacity: 0 }, 300, 'snap', function() {
                        $('.modal-bottomsheet-backdrop').transition({ y: '100%' }, 0);
                    });
                });
            }
        },

        slider: function(sliderParent, sliderItems) {
            var reqAnimationFrame = (function () {
                return window[Hammer.prefixed(window, "requestAnimationFrame")] || function (callback) {
                    setTimeout(callback, 1000 / 60);
                }
            })();
            function dirProp(direction, hProp, vProp) {
                return (direction & Hammer.DIRECTION_HORIZONTAL) ? hProp : vProp
            }
            function HammerCarousel(container, direction) {
                this.container = container;
                this.direction = direction;
                this.panes = Array.prototype.slice.call(this.container.children, 0);
                this.containerSize = this.container[dirProp(direction, 'offsetWidth', 'offsetHeight')];
                this.currentIndex = 0;
                this.hammer = new Hammer.Manager(this.container);
                this.hammer.add(new Hammer.Pan({ direction: this.direction, threshold: 10 }));
                this.hammer.on("panstart panmove panend pancancel", Hammer.bindFn(this.onPan, this));
                this.show(this.currentIndex);
            }
            HammerCarousel.prototype = {
                show: function (showIndex, percent, animate) {
                    showIndex = Math.max(0, Math.min(showIndex, this.panes.length - 1));
                    percent = percent || 0;

                    var className = this.container.className;
                    if (animate) {
                        if (className.indexOf('animate') === -1) {
                            this.container.className += ' animate';
                        }
                    } else {
                        if (className.indexOf('animate') !== -1) {
                            this.container.className = className.replace('animate', '').trim();
                        }
                    }
                    var paneIndex, pos, translate;
                    for (paneIndex = 0; paneIndex < this.panes.length; paneIndex++) {
                        pos = (this.containerSize / 100) * (((paneIndex - showIndex) * 100) + percent);
                        translate = 'translate3d(' + pos + 'px, 0, 0)';
                        this.panes[paneIndex].style.transform = translate;
                        this.panes[paneIndex].style.mozTransform = translate;
                        this.panes[paneIndex].style.webkitTransform = translate;
                    }
                    this.currentIndex = showIndex;
                },
                onPan: function (ev) {
                    var delta = dirProp(this.direction, ev.deltaX, ev.deltaY),
                        percent = (100 / this.containerSize) * delta,
                        animate = false;
                    if (ev.type == 'panend' || ev.type == 'pancancel') {
                        if (Math.abs(percent) > 20 && ev.type == 'panend') {
                            this.currentIndex += (percent < 0) ? 1 : -1;
                        }
                        percent = 0;
                        animate = true;
                    }
                    this.show(this.currentIndex, percent, animate);
                }
            };


            setTimeout(function() {
                $(sliderParent+' '+sliderItems).addClass('animate-css');
            }, 100, sliderParent, sliderItems);

            return new HammerCarousel(document.querySelector(sliderParent), Hammer.DIRECTION_HORIZONTAL);
        },

        tab: function() {
            $('.tabs a').on('click', function() {
                var tab = $(this).parents('.tabs').eq(0).attr('tab');
                var tabContent = $(this).attr('tab-content');

                $(this).parents('.tabs').find('a').removeClass('active');
                $(this).addClass('active');

                $('#'+tab+' .tab-content').removeClass('active');
                $('#'+tab+' #'+tabContent).addClass('active');
            });
        }
    }
};