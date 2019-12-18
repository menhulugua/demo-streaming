import React from 'react';
import { Link } from 'react-router-dom';

import PopularBar from './PopularBar';

const Homepage = () => {
  return (
    <div>
      <PopularBar type="Titles"/>
      <div className="homepage content">
        <Link to="/popular-series">
          <div className="movieBox">
            <div className="movieBoxImage">
              <div className="overLay">Series</div>
            </div>
            <p>Popular Series</p>
          </div>
        </Link>
        <Link to="/popular-movies">
          <div className="movieBox">
            <div className="movieBoxImage">
              <div className="overLay">Movies</div>
            </div>
            <p>Popular Movies</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
