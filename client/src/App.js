import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div className='saved-list'>
        <h3>List of Our Top 6 Movies</h3>
        <Link to='/MovieList' className="home-button">Movie List</Link>
      </div>
      
      <Switch>
        <Route path='/MovieList/:id'>
          <Movie movies={movieList} />
        </Route>
      <Route path='/MovieList' >
        <MovieList movies={movieList}/>
      </Route>
      </Switch>
    </div>
  );
};

export default App;
