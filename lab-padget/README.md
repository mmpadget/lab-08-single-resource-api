# Lab 8: Single Resource API

## Description
* For this lab we created an HTTP Server using the http module.
* We made an object constructor that creates a simple resource with properties.
* We created a body parser to parse json in the body of POST and PUT requests.
* We created a url parser that uses node url and querystring modules for the request url.
* We created a router constructor that manages requests to GET, POST, PUT, and DELETE.
* We created a storage module that stores resources by their type and id.
* [Class 8](https://github.com/codefellows/seattle-javascript-401d15/tree/master/class-08-vanilla-REST-api)
* [Lab 8](https://github.com/codefellows-seattle-javascript-401d15/lab-08-single-resource-api)

## Prerequisites
* Node

## Installation
Please visit the following pages for how to install your project locally.

[Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
[Fork A Repo](https://help.github.com/articles/fork-a-repo/)
[Forking](https://guides.github.com/activities/forking/)

```npm init
npm install -D debug
npm install -S uuid
npm install -D mocha chai chai-http
```

To use `npm run watch`
* Open package.json
* Add "watch": "nodemon server.js"

## Running the Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal on a Mac)
	npm run test
	DEBUG=http* nodemon server.js
	http POST :3000/api/note name=get+chocolate date=“04-26-2017”

## Resources
* [Promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises)
* [Node HTTP](https://nodejs.org/api/http.html)
* [HTTP Header Fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields)
* [Chai HTTP](https://github.com/chaijs/chai-http)
* [Super Agent](https://visionmedia.github.io/superagent/)
* [Status Dogs](https://httpstatusdogs.com)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor.
* Judy Vue, Lead Teaching Assistant.
* Thomas Martinez, Teaching Assistant.
