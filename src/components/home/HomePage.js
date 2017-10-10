import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>HoboFacts Administration</h1>
        <p>React, Redux, React Router in ES6 demo</p>
        <Link to="about" className="btn btn-primary btn-lg">More</Link>
      </div>
    );
  }
}

export default HomePage;
