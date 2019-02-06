"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    svg_sprite: {
      dist: {
        expand: true,
        cwd: "src",
        src: ["*.svg"],
        dest: "dist",
        options: {
          dest: "dist",
          mode: {
            symbol: {
              dest: ".",
              sprite: "symbol-spritesheet.svg",
            },
          },
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-svg-sprite");
  grunt.registerTask("default", ["svg_sprite"]);
};
