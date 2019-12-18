import React from 'react';

import PopularBar from './PopularBar';

class PopularMovies extends React.Component {
  state = {movies: null};
  async componentDidMount() {
    try{
      const response = await fetch(`${window.location.origin}/sample.json`);
      const data = await response.json();
      let movies = data.entries.filter(movie => movie.releaseYear > 2010 && movie.programType === this.props.type).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 21);
      this.setState({movies: movies});
    }
    catch(err) {
      this.setState({movies: 'error'});
    }
  }

  renderMovies() {
    if (!this.state.movies) {
      return <div>Loading...</div>;
    } else if (this.state.movies === 'error') {
      return <div>Oops, something went wrong...</div>;
    }

    return this.state.movies.map((movie, index) => {
      return (
        <div className="movieBox" key={`movie-${index}`}>
          <div className="movieBoxImage">
            <img src={movie.images['Poster Art'].url} alt={movie.title}/>
          </div>
          <p>{movie.title}</p>
        </div>
      );
    });
  }

  render(){
    let classNames = `list content ${!this.state.movies || this.state.movies === 'error'? 'noGrid' : ''}`;
    let type = 'Titles';
    if (this.props.type === 'movie')
      type = 'Movies';
    if (this.props.type === 'series')
      type = 'Series';

    return (
      <div>
        <PopularBar type={type}/>
        <div className={classNames}>{this.renderMovies()}</div>
      </div>
    );
  };
}

export default PopularMovies;
