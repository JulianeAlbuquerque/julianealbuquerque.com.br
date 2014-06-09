module.exports = function( grunt ) {

  grunt.initConfig({

    // sass
    sass : {
      css : {
        options : {
          style : 'compressed'
        },
        files : {
          'stylesheet/application.css' : '_sass/application.scss'
        }
      }
    },

    // Watch
    watch: {
      dist : {
        files : [
          '_sass/**/*'
        ],

        tasks : [ 'sass' ]
      }
    },

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'sass' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};
