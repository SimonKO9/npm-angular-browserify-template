Tools used
==========

* NPM - dependency management tool
* gulp - automated builds
* browserify - manages dependencies between JavaScript modules

Build features
=====================

* LESS to CSS compilation, minification and concatenation into single file
* watchers and autoreload of development server whenever sources change
* independent dist build for releasing your application
* dev and dist builds are defined in separate files
* browserify binds dependencies to JavaScript sources and merges them into single file.

Goals
=====================

* `gulp dev` - processes sources (LESS and JS), copies sources into ./dev and launches development server at port 8888 with autoreload feature
* `gulp dist` - processes sources and places them under ./dist
* `gulp clean` - cleans up dist and dev directories

How to start
==============

1. Make sure you have Node.js with NPM installed. Also make sure to install gulp globally: `npm install gulp -g`.
2. Checkout this repository.
3. Install local packages: `npm install`
4. Start development server with auto-reload watchers set: `gulp dev`.