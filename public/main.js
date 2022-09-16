(function () {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

    // check device is iOS or Mac OS
    if (isSafari || isIOS) {
        window.onpageshow = function(event) {
            if (event.persisted) {
                window.location.reload();
            }
        };
    }
})();