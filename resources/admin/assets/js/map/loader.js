const Q = require("q");
var setUp = false;
const loadingDefered = Q.defer();
export const loaded = loadingDefered.promise;
window['mapsInit'] = () => {
    loadingDefered.resolve();
}
export const load = (apiKey, version, libraries, loadCn) => {
    if (!setUp) {
        const googleMapScript = document.createElement('SCRIPT');
        var options = {};
        if (typeof apiKey == 'string') {
            options.key = apiKey;
        } else if (typeof apiKey == 'object') {
            for (let k in apiKey) { // transfer values in apiKey to options
                options[k] = apiKey[k];
            }
        } else {
            throw new Error('apiKey should either be a string or an object');
        }
        // libraries
        let librariesPath = "";
        if (libraries && libraries.length > 0) {
            librariesPath = libraries.join(',');
            options['libraries'] = librariesPath;
        } else if (Array.prototype.isPrototypeOf(options.libraries)) {
            options.libraries = options.libraries.join(',');
        }
        options['callback'] = 'mapsInit';
        let baseUrl = 'https://maps.googleapis.com/';
        if (typeof loadCn == 'boolean' && loadCn === true) {
            baseUrl = 'http://maps.google.cn/';
        }
        let url = baseUrl + 'maps/api/js?' + Object.keys(options).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(options[key])).join('&');
        if (version) {
            url = url + '&v=' + version;
        }
        googleMapScript.setAttribute('src', url);
        googleMapScript.setAttribute('async', '');
        googleMapScript.setAttribute('defer', '');
        document.body.appendChild(googleMapScript);
    } else {
        throw new Error('You already started the loading of google maps');
    }
}