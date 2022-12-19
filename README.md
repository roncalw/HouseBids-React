# Getting Started with Create React App

# Steps
### * Run the create-react-app package
Notice: Specifying the template as typescript causes the js (eg. index.js and App.js) files to be tsx files instead (eg. index.tsx and App.tsx).
```DOS
npx create-react-app react-02 --template typescript
```
### * Open Visual Studio from the new react folder, created above, react-02
  
![](public/images/image_001.jpg)

<br/>

### * Install Bootstrap
```DOS
npm install bootstrap
```

### * Edit index.tsx file to import the Bootstrap CSS file
<br/>

#### Index.tsx file
```TS
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";                                                  <====

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
### * Create a child directory under src called main and move App.tsx and App.css to the new directory. Be sure to update the import statement in index.tsx. 
![](public/images/image_002.jpg)


### In the App.css file, replace the contents with this. 
<br/>

#### App.css file
```CSS
.logo {
  height: 150px;
  cursor: pointer;
}

.subtitle {
  font-style: italic;
  font-size: x-large;
  color: coral;
}

.themeFontColor {
  color: coral;
}

tr {
  cursor: pointer;
}

```
### * In the main folder, create a header.tsx file with the content below. 
### NOTE: Copy over the file called GloboLogo.png from Pluralsight course and drop it in the main folder so that the reference to in the header.tsx file works.
<br/>

#### Header.tsx file
```TSX
import logo from "./GloboLogo.png";

type Args = {
  subtitle: string;
};

const Header = ({ subtitle }: Args) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;

```


### Next edit the App.tsx file from the 1st section below to the 2nd one
<br/>

#### App.tsx file (previous code)
```TSX
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```
### NOTE: When you type in the header element, the import Header line is added automatically

<br/>

#### App.tsx file (replacement code)
```TSX
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Header subtitle="Providing houses all over the freakin world!!"></Header>
    </div>
  );
}

export default App;

```
### Test the changes by running npm start
![](public/images/image_003.jpg)



<br/>
<br/>
===================================================================================

<br/>
<br/>
<br/>
<br/>
<br/>

















































This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
