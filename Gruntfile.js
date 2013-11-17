
module.exports = function(grunt){
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect:{
			server: {
				options:{
					port: 9001,
					hotname: '*',
					// open: true
				}
			}
		},
		compass: {
			dev: {
				options: {
					force: true,
					basePath: "d:/wamp/www/portfolio/montagem/",
                    sassDir: "assets/sass/",
                    cssDir: "assets/css/",
                    imagesDir: "assets/img/",
                    generatedImagesDir: "assets/img/sprites/",
                    outputStyle: "expanded"
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['assets/sass/**/*'],
				tasks: ['buildcss']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('createserver', ['connect:server']);
	grunt.registerTask('buildcss', ['compass:dev']);

	grunt.registerTask('run', ['createserver', 'watch']);
};