# UniConnect
An application that aims to connect university students to a common study area based on their tastes and preferences. To use the application, a user will input a location on the University of Waterloo campus, input the location of their friend on the University of Waterloo, and select preferences to various study locations on campus. 

# Backend: matching algorithm 
-	A server launched with flask and ngrok to send data from the frontend and backend of the application through JSON files.
-	Backend algorithm: Once receiving the location of the user and their friend from the frontend, the Google Maps API is called to calculate the distances between the user and their friend to various spots on campus.
-	The algorithm will choose a common study location that takes into account the location that has both the shortest location between both the user and their friend and the preferences of the users of various study locations. 

# Frontend: 
- Framework: React, utilising components, hooks, JQuery, React Router Dom and Tailwind CSS. 
- Once the user has inputed all the necessary information for the backend algorithm to run, the frontend will send a POST request to the backend server to retreive the optimal study location. 

# Libraries and Dependecies:
Python (Backend):
- Flask
- Flask CORS
- PyNgrok
- Google Maps API (Python)

Frontend:
- React Framework
- Vite JS
- Tailwind CSS
- react-google-maps API
- tanstack/react-query (JQuery)
- react-router DOM
- gh-pages (GitHub pages)

# To launch the application:
## Google Maps API:
A Google Maps API key is needed for the project to work, which can be configured here: https://developers.google.com/maps/documentation/javascript/get-api-key after creating a project. Make sure that the Distance API, Geocoding API, Maps Embed API and Maps JavaScript API are configured by going to API on the left sidebar. Replace wherever it says `GOOGLE_MAPS_API_KEY` with the key. 

Additionally, it may be helpful to restrict the API key to specific domains.

## Frontend:
Installing Node.JS here:https://nodejs.org/en/download/, making sure that the version is at least 14. Having versions 16 through 18 is optimal. 

After installing Node.JS, a quick way to install all dependencies: `npm install` in the terminal command line. However, if you want to install all dependencies one by one:
- Vite: A build tool for applications: run `npm i -D vite @vitejs/plugin-react` in the terminal command line.
- React JS: Framework for the application: run `npm i react react-dom` in the terminal command line.
- React Router: Client side router made for React: run `npm i react-router-dom` in the terminal command line.
- react-google-maps/api: Access Google Maps API services: run `npm i -S @react-google-maps/api` in the terminal command line.
- @tanstack/reac-query: JQuery/React Query: run `npm @tanstack/react-query`

Optional Additional Tools:
- ESLint: Linting and minor code debugging.
- Prettier: Optimizes code formatting.

## Python:
Using PyPI:
- Flask: For python-based server integration: run `pip install -U Flask` in terminal command line.
- Flask-cors: To wrap the server in CORS header: run `pip install -U flask-cors` in terminal command line.
- googlemaps: To access Google Maps API services in python: run `pip install googlemaps`
- pyngrok: To setup public web server: run `pip install pyngrok` in terminal command line.

## Using pyngrok:
Sets up public server (for RESTful API calls between frontend and backend)
- Sign up for a free ngrok account here: https://ngrok.com/.
- Once signed up, under 'Your Authtoken' sidebar, use the authoken and put `ngrok authotoken AUTH_TOKEN` in the python terminal command line. 

# Running the program
## Configuring the backend
- Launch the python file named: 'server.py'
- In the python terminal command line, input `ngrok http 3541` (Or whatever port is specified under 'main' in the 'server.py' file.

## Launching the frontend
- In the command line for the frontend (Such as in vscode), run `npm run dev` and click the link to launcht application for development and testing purposes.
- For production purposes, run `npm run build` to get a /dist folder that can be used to deploy a website to a domain. 

https://user-images.githubusercontent.com/75958818/212496115-ef3353bb-9615-4c25-9fbd-ccd540cbe2b9.mp4

*Note: This application is not affiliated with the University of Waterloo in any way. 


