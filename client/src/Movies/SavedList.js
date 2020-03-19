import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie" key={movie.id}><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></span>
      ))}
    <div className="home-button"><Link to='/'>Home</Link></div>
  </div>
);

export default SavedList;
