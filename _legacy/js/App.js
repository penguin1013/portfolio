define([

], function( ){
    var App = {};

    App.GlobalVars = {
        SCROLL_INIT_HEIGHT : 100,
        BREAKPOINT_TABLET : 1440,
        BREAKPOINT_TABLET2 : 1024,
        BREAKPOINT_MOBILE : 767
    }

    App.Events = {
        RESIZE : "resize",
        SCROLL : "scroll"
    }

    App.Init = function(){
        App.window = $(window);
        App.body = $( "body" );
        App.html = $( "html, body" );
        App.IsMobile = isMobile();
    }

    function isMobile(){
        var isMobileAgent = /iphone|ipad|ipod|android/gi.test(navigator.userAgent);

        if ( isMobileAgent ) {
            _isMobile = true;
        }else{
            _isMobile = false;
        }

        return _isMobile;
    }

    return App;
});