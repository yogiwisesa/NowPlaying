import React from 'react';
import { View, StatusBar } from 'react-native';
import Header from './Header';
import MovieList from './MovieList';


const App = () => {
    return (
        <View>
            <StatusBar
                backgroundColor="#1D1D1D"
                barStyle="light-content"
            />
            <Header headerText={'Now Playing'} />
            <MovieList />
        </View>
    );
};

export default App;
