var app = {    

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        window.open = cordova.InAppBrowser.open;
        var inAppBrowserRef;
        var target = "_blank";
        var options = "location=yes,hidden=yes";
        var url = 'https://www.sc.com/retail/mce/index.html#/landing?lang=en&ctry=HK&channel=PLRB&sapp=PUB';

        inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
    }   
};

app.initialize();   