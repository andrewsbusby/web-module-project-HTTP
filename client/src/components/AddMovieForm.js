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

    return (
        <div>
            <div className='modal-content'>
                <form onSubmit={handleSubmit}>
                    <div className='modal-header'>
                        <h3>Editing: {movie.title}</h3>
                    </div>
                    <div className='modal-body'>
                        <div className='form-input'>
                            <lable>Title</lable>
                            <input value={title}
                            onChange={handleChange}
                            name='title' type='text'/>
                        </div>
                        <div className='from-input'>
                            <label>Director</label>
                            <input value={director}
                            onChange={handleChange}
                            name='director' type='text'/>
                        </div>
                        <div className='form-input'>
                            <lable>Genre</lable>
                            <input value={genre}
                            onChange={handleChange}
                            name='genre' type='text' />
                        </div>
                        <div className='form-input'>
                            <lable>Metascore</lable>
                            <input value={metascore}
                            onChange={handleChange}
                            name='metascore' type='number' />
                        </div>
                        <div className='form-input'>
                            <lable>Discription</lable>
                            <input value={discription}
                            onChange={handleChange}
                            name='discription' type='text' />
                        </div>
                        <div className='modal-footer'>
                            <input type='submit' value='Save' />
                            <Link to={`/movies`}>
                                <input type='button' value='Cancel' /> 
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

