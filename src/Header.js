import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="headerTitle">
          <Link to="/">DEMO Streaming</Link>
        </div>
        <div className="headerButtons">
          <button>Log in</button>
          <button>Start your free trial</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
