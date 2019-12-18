import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import PopularMovies from './PopularMovies';
import Footer from './Footer';
import './normalize.css';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter onChange={this.onRouteChange}>
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
