//initial configs
$ npm i -g grunt-cli //linha de comando
$ npm init -y
$ npm i --save-dev grunt //local
$ code .

+addfile: .gitignore
	1. >node_modules
$ git init


*edit: package.json*
	7. > "grunt": "grunt",
+addfile: Gruntfile.js

*edit: Gruntfile.js*
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })

    // grunt-contrib-less $ npm i --save-dev grunt-contrib-less
    grunt.loadNpmTasks('grunt-contrib-less');
    // gunrt-contrib-sass $ npm i --save-dev grunt-contrib-sass
    grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt-concurrent: parallel tasks $ npm i --save-dev grunt-concurrent
    grunt.loadNpmTasks('grunt-concurrent');
    
    // Tarefa 'default' com target em 'concurrent' $ npm run grunt
    grunt.registerTask('default', ['concurrent']);
}


$ npm run grunt


