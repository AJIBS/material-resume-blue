module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					sizes: [{
						name: 'small',
						width: '320',
						quality: '70'
					}],
				},
				files: [{
					expand: true,
					src: ['*.jpg'],
					cwd: 'img/old',
					dest: 'img/build',
				}]
			},
		},
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', 'responsive_images');
};