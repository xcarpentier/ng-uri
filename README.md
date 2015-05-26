ng-uri
=======

An AngularJS Service wrapper for [URI.js](http://medialize.github.io/URI.js/)


## Installing
Install via bower

```bower install ng-uri```

Require it into your application (after Angular)

```<script src="ng-uri.min.js"></script>```

Add the module as a dependency to your app

```js
var app = angular.module('yourAwesomeApp', ['ngUri']);
```

And inject it into your controller like so!

```js
var YourCtrl = app.controller('yourController', function($scope, ngUri) {
  $scope.tld = ngUri("http://medialize.github.io/URI.js").tld(); // io
});
```
