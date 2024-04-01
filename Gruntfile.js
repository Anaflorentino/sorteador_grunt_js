module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // less
        less: {
            // development (for the dev/local)
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            // production (for the user/client)
            production: {
                options: {
                    compress: true,
                },
                // out:in
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            },
        },
        // watch
        watch: {
            less: {
                // Vai acessar qualquer pasta e qualquer arquivo.less dentro de qualquer pasta dentro de styles
                files: ['src/styles/**/*.less'],
                // Tarefas executadas quando algum arquivo less for alterado
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },

        // replacce // $ npm run grunt replace:dev
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        // onde será feita a subtituição
                        src: ['src/index.html'],
                        // pasta destino dos arquivos já substituídos
                        dest: 'dev/'
                    }
                ]
            },
            // subtituição
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        // htmlmin // $ npm run grunt htmlmin:dist
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true, 
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        // clean: apagar pasta temporária // $ npm run grunt build
        clean: ['prebuild'],
        // uglify para comprimir js // 
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })
        


    // $ npm i --save-dev grunt-contrib-less
    grunt.loadNpmTasks('grunt-contrib-less');
    // $ npm i --save-dev grunt-contrib-watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    // $ npm i --save-dev grunt-replace
    grunt.loadNpmTasks('grunt-replace');
    // $ npm i --save-dev grunt-contrib-htmlmin
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // $ npm i --save-dev grunt-contrib-clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    // $ npm i --save-dev grunt-contrib-uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');

    
    // Tarefa 'default' no nível de build
    grunt.registerTask('default', ['watch']);
    // Target no nível de production
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
}