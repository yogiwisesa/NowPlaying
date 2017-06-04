import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MovieDetail from './MovieDetail';

class Movielist extends Component {
    state = { movies: [] };

    componentWillMount() {
        axios.get('http://api.themoviedb.org/3/movie/now_playing?api_key={YOUR_API_KEY_HERE}') // Change {YOUR_API_KEY_HERE} with your own API KEY
            .then(response => this.setState({ movies: response.data.results }));
    }

    renderMovies() {
        console.log('tes');
        return this.state.movies.map(movie =>
            <MovieDetail key={movie.title} movie={movie} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderMovies()}
            </ScrollView>
        );
    }
}

export default Movielist;
