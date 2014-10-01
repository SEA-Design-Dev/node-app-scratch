## Steps to Success - Guide to Setup Node with Express


**Simple steps to get this accomplished with Express so that you have a framework to get started with right away!**



* Make sure you have both node, express, and npm installed in your machine to get this to work
* In terminal - `express <name-of-the-app>` (do not use the greater then or less then characters)
* `cd` into the newly created app that you just named above
* then `npm install` - which installs all the base dependencies for the express app
* then `npm start` - this allows you to preview the app on localhost:3000 in your browser
* Next you will want to make sure to install Grunt - `npm install grunt -g`
* then to make this a dependency in the app `.json` file is to do: `npm install --save grunt`
* Next is all about install Sass, to do this type `npm install --save node-sass`
* then add `git install --save grunt-sass`
* Now adding a Sass directory to the app file structure: `mkdir sass` then create a sass file: `touch sass.scss`
* Add some Sass to this file with your text editor
* Then to make sure this is all working correctly, lets start up grunt in the terminal in a _new tab_ - type `grunt` and this will process the Sass.

### You are now up and running!!!


