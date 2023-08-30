requirejs.config({
    paths : {
        "$" : "lib/jquery-1.11.2.min",
        "TweenMax" : "lib/TweenMax.min",
        "App" : "App"
    },

    shim : {

        "App" : {
            deps : [ "$", "TweenMax" ],
            exports : "App"
        }
    },

    urlArgs : "ts=" + ( new Date()).getTime()
})