import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => { 
    let xx = savedList.map(savedInList => {
      return savedInList.title
    })
    if (xx.includes(movie.title)) {
      alert('cant add 2 movies of the same title')
    } else {
      setSavedList([...savedList, movie])
    }    
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={(props) => <Movie {...props} addToSavedList={addToSavedList} list={savedList} />} />
    </div>
  );
};

export default App;