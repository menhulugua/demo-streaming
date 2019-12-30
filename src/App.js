import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header.js';
import Homepage from './Homepage.js';
import PopularMovies from './PopularMovies.js';
import Footer from './Footer.js';
import './styles/normalize.css';
import './styles/styles.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter onChange={this.onRouteChange}>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/popular-movies" render={() => <PopularMovies type="movie" />} />
          <Route path="/popular-series" render={() => <PopularMovies type="series" />} />
          <Route path="/terms-and-conditions" component={Homepage} />
          <Route path="/privacy-policy" component={Homepage} />
          <Route path="/collection-statement" component={Homepage} />
          <Route path="/help" component={Homepage} />
          <Route path="/manage-account" component={Homepage} />
          <Footer />
        </HashRouter>
      </div>
    );
  }
}

export default App;
