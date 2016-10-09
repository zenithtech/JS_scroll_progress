var r = '#main',
    v = '#container',
    f = '#bar',
    a = function() {
        var scrollTop = jQuery(window).scrollTop(),
            s = jQuery(r).offset().top,
            g = jQuery(r).height(),
            b = jQuery(v).height();

        if (scrollTop < s) {
            console.log('you are before the target area');
            TweenLite.to(f, 0.5, {
                css: {
                    width: '0%'
                }
            });
        }
        if (scrollTop >= s && scrollTop < (s + g)) {
            console.log('you are in the target area');
            TweenLite.to(f, 0.5, {
                css: {
                    width: (scrollTop - s) / (g / 100) + '%'
                }
            });
        }
        if (scrollTop >= (s + g)) {
            console.log('you are past the target area');
            TweenLite.to(f, 0.5, {
                css: {
                    width: '100%'
                }
            });
        }
    };

jQuery(window).on({
    scroll: function() {
        a();
    }
});
