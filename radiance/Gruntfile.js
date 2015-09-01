/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	// Metadata.
	pkg: grunt.file.readJSON('package.json'),
	banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
	    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
	    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
	    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; All Rights Reserved.*/',

	// Task configuration.
	jshint: {
	    files: ['src/**/*.js'],
	    options: {
		globals: {
		    JQuery: true,
		    console: true,
		    moudle: true
		}		
	    }
	},
	concat: {
	    options: {
		separator: ';',
	    },
	    dist: {
		src: ['src/**/*.js'],
		dest: 'dist/<%= pkg.name %>-<%= pkg.version%>-min.js'
	    }
	},
	uglify: {
	    options: {
		banner: '<%= banner %>'
	    },
	    dist: {
		file: {
		    'dist/<%= pkg.name %>-<%= pkg.version%>-min.js': ['<%= concat.dist.dest%>']
		}
	    }
	}
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
