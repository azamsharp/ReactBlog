import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {AboutUs} from './components/AboutUs'
import {ContactUs} from './components/ContactUs'
import {BaseLayout} from './components/BaseLayout'
import {AddSomething} from './components/AddSomething'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/add-something" component={AddSomething} />
      <Route path="/" component={App} />
    </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
