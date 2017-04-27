'use strict';

// see lab read me

/*
## Submit Assignment
write a question and observation on canvas
also describe how long the assignment took you

## Directions
make these directories to organize your code
lib
test
model
route
data // to hold your resources
refactor the storage module to have file system persistence

## Server End Points
/api/simple-resource-name

POST request
pass data as stringifed json in the body of a post request to create a resource
GET request
pass an ?id=<uuid> in the query string to retrieve a specific resource as json
DELETE request
pass an ?id=<uuid> in the query string to delete a specific resource
should return 204 status with no content in the body

## Tests from Lab page
your tests should start your server when they begin and stop your server when they finish
write a test to ensure that your api returns a status code of 404 for routes that have not been registered
write tests to ensure your /api/simple-resource-name endpoint responds as described for each condition below:
GET - test 404, responds with 'not found' for valid request made with an id that was not found
GET - test 400, responds with 'bad request' if no id was provided in the request
GET - test 200, response body like {<data>} for a request made with a valid id
POST - test 400, responds with 'bad request' for if no body provided or invalid body
POST - test 200, response body like {<data>} for a post request with a valid body


## Tests
* your tests should start your server when they begin and stop your server when they finish
* write a test to ensure that your api returns a status code of 404 for routes that have not been registered
* write tests to ensure your `/api/simple-resource-name` endpoint responds as described for each condition below:
  * `GET` - test 404, responds with 'not found' for valid request made with an id that was not found
  * `GET` - test 200, response body like `{<data>}` for a request made with a valid id
  * `POST` - test 400, responds with 'bad request' for if no `body provided` or `invalid body`
  * `POST` - test 201, response body like  `{<data>}` for a post request with a valid body
  * `PUT` - test 400, responds with 'bad request' for if no `body provided` or `invalid body`
  * `PUT` - test 202, response body like  `{<data>}` for a put request with a valid  id
  * `DELETE` - test 404, responds with 'not found' for valid request made with an id that was not found
  * `DELETE` - test 204, response for a delete request with a valid id
*/
