
# Books management front-end

## What does this do?
It is a front-end of books management test task. I built it in React, graphql and MaterialUI and used the vite as a dev server for it.

## Setting up the project to run locally

### Step 1 - Clone the project
Use git to clone the project to your local machine

### Step 2 - Install required dependencies
For development, you will need Node.js(v16.15.0) and Yarn installed on your environment.

After node and yarn are installed, run the following command from the root directory of the application (you may need to install some node modules):

```
yarn install
```

Amazing! Now all of those sweet node modules that we use to make this application work should be installed.


### Step 3 - Setup and configure environment variables
 Create a `.env` file in root directory of the application and add the following line in it.
```
VITE_API_URL=http://localhost:8000
```

### Step 4 - Start the server
Runs the application in the development mode, run the following command:
```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>


## Some other available Scripts
There are some other scripts, you can run in the project directory:

```
yarn coverage
```
Please run above command to run the test cases. and it is also provide the test coverage stats.

```
yarn test:ui
```
Please run above command to run the E2E test cases.

```
yarn build
```
Please run above command to make a production build.
