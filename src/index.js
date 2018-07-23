import React from 'react';//basic react package
import ReactDOM from 'react-dom';//basic react package
import { BrowserRouter as Router } from 'react-router-dom';//package
import './index.css';//css that covers the website in general as opposed to any specific components
import App from './app.component';//the location of the component from which all other components stem
import { Provider } from 'react-redux';//package
import { createStore } from 'redux';//package
import portalApp from './reducers';//location of code that changes the website's theme
import registerServiceWorker from './registerServiceWorker';//location of code which loads components of the website from the cache
import WebFont from 'webfontloader';//package that loads a font package from the web
//loads the Barlow font which is the default font for the website
WebFont.load({
  google: {
    families: ['Barlow:300,400,400i,500,600,700']
  }
});

const store = createStore(portalApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// the provider component is the component responsible for the changing and loading of the websites theme
// the app component is the component that all components stem from
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') // attaches the app component to the website HTML located at index.html
);
registerServiceWorker();//runs code involved in loading website compoments from the cache
