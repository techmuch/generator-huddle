# Application Framework

---

Please watch this [video](http://vimeo.com/97519516).

<iframe src="//player.vimeo.com/video/97519516" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/97519516">Steve Sanderson - Architecting large Single Page Applications with Knockout.js</a> from <a href="http://vimeo.com/ndcoslo">NDC Conferences</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

## Setup

The following sequence of steps will prepare your workspace as a standard ASDL application

### Server Preparation

The following step are performed only once on a system (server). These steps can be skipped in most cases.

		sudo apt-get install nodejs npm git

        sudo npm install -g yo bower gulp karma generator-huddle http-server

### Workspace Preparation

		mkdir <project name>

        cd <project name>

        yo huddle

you should see the following shortly after the last command

		     _-----_
		    |       |
		    |--(o)--|   .--------------------------.
		   `---------´  |    Welcome to Yeoman,    |
		    ( _´U`_ )   |   ladies and gentlemen!  |
		    /___A___\   '__________________________'
		     |  ~  |
		   __'.___.'__
		 ´   `  |° ´ Y `

		You're using the fantastic Knockout app generator.
		[?] What's the name of your new site? test
		[?] What language do you want to use? JavaScript
		[?] Do you want to include automated tests, using Jasmine and Karma? (Y/n)

		... lots more output...

At this point you should have your starter application.  Your top level directory should look like the following:

		ls -l

		-rw-rw-r--  1 david david  366 Jan 22 13:43 bower.json
		-rw-rw-r--  1 david david 2819 Jan 22 13:03 gulpfile.js
		-rw-r--r--  1 david david 1794 May 11  2014 karma.conf.js
		drwxrwxr-x 19 david david 4096 Jan 22 13:43 node_modules
		-rw-rw-r--  1 david david  571 Jan 22 13:43 package.json
		drwxrwxr-x  7 david david 4096 Jan 22 13:19 src
		drwxrwxr-x  4 david david 4096 Jan 22 13:43 test

The subdirectory `src` is the where your application files are located,

		ls -l src/

		drwxrwxr-x  2 david david 4096 Jan 22 13:03 app
		drwxrwxr-x 11 david david 4096 Jan 22 13:04 bower_modules
		drwxrwxr-x  5 david david 4096 Jan 22 13:03 components
		drwxrwxr-x  2 david david 4096 Jan 22 13:03 css
		-rw-rw-r--  1 david david  718 Jan 22 13:43 index.html

Setup your source code versioning by:

		git init
        git config --global user.name "David Fullmer"
        git config --global user.email "david.fullmer@gatech.edu"

To perform your first commit:

		git add ./
        git commit -am 'init commit'

To see your first git log:

		git log

To execute your starter app:

		http-server -p <your assigned port> src

then browse to

		http://mele:<your assigned port>

## Components
To create a sample component called `fancy-widget`, do the following:

		yo ko:component fancy-widget

You should see:

		Creating component 'fancy-widget' (JavaScript)...
		   create src/components/fancy-widget/fancy-widget.html
		   create src/components/fancy-widget/fancy-widget.js
		   registered fancy-widget in src/app/startup.js
		To include in build output, reference 'components/fancy-widget/fancy-widget' in gulpfile.js

Note that a new directory with two files were created for you along with enteries in the `startup.js` and `gulpfile.js`

In order to use your new component modify the following file `src/components/home-page/home.html` to contain the following:

		<h2>Home</h2>

		<p data-bind='text: message'></p>

		<button data-bind='click: doSomething'>Click me</button>

		<hr/>

		<fancy-widget></fancy-widget>

Save and refresh your broswer (assuming your http-server is running and that your boswers cache is disabled).

## Useful Tools and Links
There is a great set of online tools useful for creating applications. I few of them are listed below

 1. [http://jsonlint.com/ Is a very useful JSON validator](http://jsonlint.com/)
 2. [http://jquery.com/ Is a useful javascript library to manipulating the document object model](http://jquery.com/)
 3. [http://knockoutjs.com/ Is a useful databinding and templating library](http://knockoutjs.com/documentation/introduction.html)
 4. [http://d3js.org/ Is a useful databinding visualization library](http://d3js.org/)
 5. [http://threejs.org/ 3D library](http://threejs.org/)
 6. [http://getbootstrap.com/ Styling and layout library](http://getbootstrap.com/)
 7. [http://fletcher.github.io/MultiMarkdown-4/syntax Markdown Syntax](http://fletcher.github.io/MultiMarkdown-4/syntax)
 8. [https://github.com/kriskowal/q Promise library](https://github.com/kriskowal/q)
 9. [https://github.com/nathanboktae/q-xhr Ajax promise library](https://github.com/nathanboktae/q-xhr)
 10. [http://requirejs.org/ Auto module loader](http://requirejs.org/)
 11. [http://yeoman.io/ Scaffolding framework](http://yeoman.io/)
 12. [http://bower.io/ Library of libraries](http://bower.io/)
 13. [http://git-scm.com/ Distributed version control system](http://git-scm.com/)

We will add to this list over time
