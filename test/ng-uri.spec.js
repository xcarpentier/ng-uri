// Tests the ng-uri module has access to URI.js functions as accessible
describe('ng-uri', function () {

    beforeEach(module('ngUri'));

    it('should have ngUri as a service defined', inject(function (ngUri) {
        expect(ngUri).toBeDefined();
    }));

    it('should contain the URI.js isArray function', inject(function (ngUri) {
        expect(ngUri("http://medialize.github.io/URI.js").tld()).toBe("io");
    }));

});