# Getting Started with `Blog Application`
This is a sample application, showing how to create a web application, called 'Blog Application' using React for client-side development.

## Features included in project
- Listing the Blogs from DB
- Adding new Blog in DB
- Deleting the Blog from DB
- Showing details for a particular Blog
- Routing to differnt pages
- Creating Custom Hook
- Loading indicator on UI during network calls
- Error mechanism when resources not found
- Asset not found state

## Medium blog explaining step by step guide to create an application
- https://medium.com/@17vidushigupta/react-insights-a-simple-blogs-application-from-scratch-part-1-91700ac2e8a2

![Screenshot](/images_README/screenshot_medium.png)
#

## Steps to locally run the project
- Clone the repo
- Install the package dependecies
    ### `npm install`  
- Run the app in development mode
    ### `npm start`
- Load the application on Browser, 'http://localhost:3000/'

## If no web server available to serve local assets
JSON server can be used to create the endpoints for the data file & use it for application CRUD operations

Start the JSON-server if you wish to serve the file locally. 
- sample db.json file is included in project to serve the data from. 
 
Following command will start the server on port 8000
This server will be listening to the data/db.json file & will provide the API endpoints
Using it this way would not install the json-server, but you still will be able to use it for the project

- Open a new terminal & execute
### `npx json-server --watch data/db.json --port 8000`
- Access the endpoint as 'http://localhost:8000/blogs'
- db.json file should load on browser, indicating server is available & active

## Application snapshots
### `>>Listing`
![Screenshot](/images_README/screenshot_listing.png)
#
### `>>Create Blog using form inputs`
![Screenshot](/images_README/screenshot_create.png)
#
### `>>Show individual blog details`
![screenshot](/images_README/screenshot_details.png)
#
### `>>Error state due to network call`
![Screenshot](/images_README/screenshot_error.png)
#
### `>>Show loaing state during data is fetched over network`
![Screenshot](/images_README/screenshot_loader.png)
#
### `>>If resource not found`
![Screenshot](/images_README/screenshot_404.png)
#
#
# `Learning Resources`:
- https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2

- https://react.dev/

#
# `More details`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
#