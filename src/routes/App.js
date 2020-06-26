import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
import '../assets/styles/Styles.scss';

// pages
import Home from '../container/Home.jsx';
import Detail from '../container/Detail.jsx';
import Curiosities from '../container/Curiosities.jsx';
import DynamicFilter from '../container/DynamicFilter.jsx';
import NotFound from '../container/NotFound.jsx';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:number/:name' component={Detail} />
        <Route exact path='/curiosities' component={Curiosities} />
        <Route exact path='/:dynamicFilter' component={DynamicFilter} />
        <Route component={NotFound} />
      </Switch>
      {/* </Header> */}
    </BrowserRouter>
  );
};

export default App;
