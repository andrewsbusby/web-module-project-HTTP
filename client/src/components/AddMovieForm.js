import React, {useState, useEffect} from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const AddMovieForm = (props) => {
    const { push } = useHistory();

    const [movie, setMovie] = useState({
        title: '',
        director: '',
        genre: '',
        meatscore: 0,
        description: '',
    });

    const {id} = useParams();

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/movies', movie)
            .then(res => {
                push('/movies');
            })
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                props.getMovies();
            })
    }

    const { title, director, genre, metascore, description } = movie;
}

