import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
import '../assets/styles/Styles.scss';

// pages
import Home from '../container/Home.jsx';
import Detail from '../container/Detail.jsx';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:pokedex_number/:name' component={Detail} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* </Header> */}
    </BrowserRouter>
  );
};

export default App;
