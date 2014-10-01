# UXE - Node app from scratch

For this assignment, we have built a simple Node example project. We build a Grunt script that includes libsass. Include JavaScript(jQuery) and hopefully prepare for deployment to Heroku.

## Step By Step Instructions

1. mkdir (project name)
2. npm init 
3. subl . (to open project in sublime text)
4. npm install
5. express (project name) 
6. cd into app
7. npm install (should not have to sudo anything... ever)
8. npm start (localhost:3000 most likely)
9. contol t (to keep the npm server running in the background to continue to view easily as changes are made)
10. touch Gruntfile.js 
   Add to gruntfile: 
   module.exports = function(grunt) {
  grunt.initConfig({

    ...

  });

  grunt.loadNpmTasks('<package>');
};

11. npm install --save grunt
12. npm install --save node-sass
13. npm install grunt-sass --save
14. update Gruntfile.js : 
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};

15. mkdir sass
16. touch style.scss
17. add to sass file: 
$color: orange;

body {
  background-color: $color;
}

18. run grunt 
19. touch .gitignore
   add: node_modules
20. npm install --save-dev grunt-contrib-watch
21. add the following to Gruntfile.js:
   module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
22. Add the following to layout.jade:
   script(src='http://localhost:35729/livereload.js')
23. bower install git://github.com/Toadstool-Stipe/stipe.git
24. npm install -g bower
25. bower init
26. bower install bourbon
27. bower install bower-bourbon
28. bower register <my-package-name> <git-endpoint>
29. bower install sass-icon-fonts --save
30. git config --global url."https://"
31. bower install css-calc-mixin --save
32. update Gruntfile.js with:
   module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss'
        }
      },
      options: {
        includePaths: [
          './bower_components/css-calc-mixin'
        ]
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
