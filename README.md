# new-relic


# Running the Project
  
## 1. Clone the Repo
Clone the `new-relic code` locally. In a terminal, run:
  `git clone https://github.com/cristinaguimaraes/new-relic.git`
  
## 2. Create the .env file 
Copy the .env.example file to .env file 
    
## 3. Install dependencies
In the terminal, run:
```
npm install
```
## 4. Run locally
```
npm start
```

# Running Tests
```
npm t
```


# Project structure
The project has a main folder on the root path where the code is (src folder). At the same level, there are the different configuration files for tools such as husky and prettier.

## Source code (folders from src code):

api: folder where the app read the provided JSON file.

assets: folder to store the static resource (font-face: HelveticaNeue and HelveticaNeue-Bold).

components: folder where there are the React components.

hooks: folder to store the custom hook (useRequest).

pages: folder containing the pages (each page is one path).

redux: folder to store all redux code related (actions, reducers and store).

styles: folder containing the project related css style (Global Style).

index.jsx: the entry point of the project, the main file.

setupTests.js: configuration file for the tests.

## Configuration files:

.huskyrc: file that configures the pre-commit and pre-push hooks. 

.prettierrc: file that defines the rules of code formatting.


# Considerations about the Project

 1. I used React as the framework because it is the one that I feel more confortable to work with, I have been using it for the last two years.
 
 2. I used functions and not classes to build the React components because on my opinion it generates less code that is more organised and easier to read. Based on this decision, I used hooks (useState, useEffect, useRequest) instead of lifecycle methods.
 
 3. I used Styled Components to style the components because in my opinion is also more organised and easier to read. Based on this decision I created a Global Style to share the font-family with all the components of the app.

 4. My first approach was to not use Redux or Route, keeping all the information in just one url where the main component was holding the state. But after a while, I decided to also build the UI for the 3 methods (‘getTopAppsByHost’, ‘addAppToHosts’ and ’removeAppFromHosts’). By then, I thought that it would be more organised to introduce navigation and have different urls:
 
  './'  => for the Home where you can see the 3 forms and the link for ‘‘See list by Host’ 
  
  '/apps-by-host'  => for the ‘See list by Host’ view
  
  '/top-apps-by-host/:id' => for the ‘Top Apps By Host’ view
  
I also thought that it would be more organised to use Redux and have the information related with the apps and toast always saved in one place (single source of truth). 

  5. Once we don’t have a data source connection, if you refresh the page on '/apps-by-host' or '/top-apps-by-host/:id' , you will be redirected to '/'. I thought it would be more organised that way.
I also decided to not use SAGAS and Request Success Failure Pattern for the same reasion (no data source connection what means no asynchronous call).

  6. I used a library called 'react-toastify' for a better design of the alert dialog and also to communicate with the user if the actions (add or remove app) were well succeeded.
  
  7. I used 'jest' and 'enzyme' for unit testing. Also added 'jest-prop-type-error' package to check the prop types of every component. 
  
  8. To check the browser support for the latest 2 versions of major browsers I installed 'browserslist' and added the "last 2 xxxx version" option for each browser.
  
  
  


