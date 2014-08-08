# grunt-tasker

> A promise based task runner for Grunt.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tasker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tasker');
```

## The "tasker"

### Overview
In your project's Gruntfile, add a section named `tasker` to the data object passed into `grunt.initConfig()`.


Running the standard the `tasker` or `grunt -h` job will display the list of available jobs in the tasks folder.

```js
grunt.initConfig({
  tasker: {
    options: {
      tasks_file: './tasks',
      verbose: true,
      throttle: 1000,
      concurrency: 30,
      xml: {
        // any setting from XML2JS project
      }
    }
  }
});
```

### Options



#### options.throttle
Type: `Integer`
Default value: `0`

The millisecond delay between external requests.




#### options.task_file
Type: `String`
Default value: `tasks`

The folder that contains all of the tasks to be run.




#### options.concurrency
Type: `Integer`
Default: `20`

Defines the maximum number of concurrent actions taking place per job.





### Usage Examples

#### Default Options
In this example, the default options are used to load the tasks folder. Trigger your tasks from the command-line with `grunt <task_file_name>`.

```js
grunt.initConfig({
  tasker: {
    options: {
      tasks_file: './tasks',
      throttle: 0,
      concurrency: 20
    }
  },
});
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
