module.exports = function (grunt) {
    grunt.initConfig({
        'bower': {
            'install': {
                'options': {
                    'targetDir': './bower_components'
                }
            }
        },
        'jshint': {
            'src': [
                './*.js',
                './test/*.js'
            ],
            'options': {
                'jshintrc': '.jshintrc'
            }
        },
        'karma': {
            'options': {
                'configFile': 'karma.conf.js'
            },
            'test': {
                'reporters': ['progress']
            }
        },
        'ngmin': {
            'dist': {
                'src': 'src/ng-uri.js',
                'dest': 'build/ng-uri.js'
            }
        },
        'uglify': {
            'dist': {
                'options': {
                    'compress': {
                        unused: false
                    },
                    'preserveComments': 'some'
                },
                'files': {
                    'build/ng-uri.min.js': 'build/ng-uri.js'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Registers a task to run Karma tests and installs any pre-requisites
    // needed.
    grunt.registerTask('test', [
        'jshint',
        'bower:install',
        'karma:test'
    ]);

    // Registers a task to build the nguri module
    grunt.registerTask('build', [
        'ngmin',
        'uglify'
    ]);

    // Registers a task to build and test ready for distribution
    grunt.registerTask('dist', [
        'build',
        'test'
    ]);

    grunt.registerTask('default', ['build']);
};