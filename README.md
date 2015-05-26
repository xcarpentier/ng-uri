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

## Developing

To help us develop this module, we are using Grunt some tasks that may be
helpful for you to know about are:

### Testing

This command will run JSHint and JSCS testing JS Files (note files within build)
are not tested, it will also run your local build of the module with all of the
Karma tests:

```grunt test``` it can also be run by using ```npm test```

### Dist

This command will build the module initially and then run the test suite.
Testing with JSHint, JSCS and Karma:

```grunt dist```
