var promisify = require('deferred').promisify;
var Tasker = require('tasker');
var fs = require('fs');

/*
 * grunt-scraper
 * https://github.com/sammerry/scraper
 *
 * Copyright (c) 2014 Sam Merry
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var jobList = {};
  var jobsDIR = [process.cwd(),grunt.config.get('tasker.options.tasks_file')].join('/');
  var jobsDescription = 'A custom task from the '
                      + grunt.config.get('scraper.jobs')
                      + ' folder';


  /*
   *
   * Build task list.
   *
   */
  var files = fs.readdirSync(jobsDIR);
  var len = files.length;

  while (len--) {
    var task = files[len];

    // TODO: handle sub-folders.
    if (/\.js$/.test(task)) {
      var taskMatch = task.match(/(.*)\.js$/) || [];
      var taskName = taskMatch[1];
      var taskPath = jobsDIR+'/'+taskName+'.js';

      jobList[taskName] = taskPath;
      grunt.registerTask(taskName, jobsDescription, taskRunner);
    }
  }




  /*
   *
   * Create runable tasks from list.
   *
   */
  function taskRunner () {
    var done = this.async();
    var jobPath = jobList[this.name];
    var options = grunt.config.get('tasker.'+ this.name)||{};
    options.path = jobPath;
    return new Tasker(options, done);
  };




  // list all available jobs
  grunt.registerTask('tasker', 'list available jobs', function () {
    console.log('All Available Jobs:');
    for (var name in jobList) {
      console.log('   '+name+'   ');
    }
  });
};
