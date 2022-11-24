//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import Addmovie from './Components/AddMovies';

function App() {
  const MovieList=useSelector(state=>state.moviereducer.movies);
  return (
    <div className="App">
      <Addmovie/>
      {MovieList.map((el,i)=>(<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterUrl} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
       {el.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>))}

    
    </div>
  );
}

export default App;
