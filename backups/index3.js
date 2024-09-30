document.addEventListener("DOMContentLoaded", function () {
    // Add custom JS if necessary
});

// Webfont Loader
WebFont.load({
    google: {
        families: [
            "Varela Round:400", 
            "Roboto:100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic:vietnamese,cyrillic-ext,greek-ext,greek,latin-ext,latin,cyrillic"
        ]
    }
});

// Add touch event class
(function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js";
    if ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) {
        n.className += t + "touch";
    }
})(window, document);
