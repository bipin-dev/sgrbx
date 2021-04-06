# To run server

    $ npm i
    $ node server.js
# API
    1) post /user 
        description: save the user data sent in body (i.e email and password), and check for token in requested headers, if valid then only it will forward request.
    2) get /user
        description: get all the user saved inside the db. 
    3) delete /user
         description: delete the user, need to pass id as the query param, also checks for token in requested headers if valid then only it will forward request. 
    4) get /name
        description: get the name of application
