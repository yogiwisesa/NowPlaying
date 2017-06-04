import React from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MovieDetail = ({ movie }) => {
    const {
        title,
        release_date,
        backdrop_path
    } = movie;

    const {
        imageStyle,
        backdropView,
        textContainer,
        dateStyle,
        titleStyle
    } = styles;

    return (
        <View>
            <Image
                style={imageStyle}
                source={{ uri: `http://image.tmdb.org/t/p/w500/${backdrop_path}` }}
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
                    style={backdropView}
                />
            </Image>
            <View style={textContainer}>
                <Text style={titleStyle}>
                    {title}
                </Text>
                <Text style={dateStyle}>
                    {release_date}
                </Text>
            </View>
        </View>
    );
};

const styles = {
    backdropView: {
        paddingTop: 60,
        flex: 1,
        width: null,
        height: 250,
        backgroundColor: 'rgba(0,0,0, 0.1)'
    },
    imageStyle: {
        height: 250,
        flex: 1,
        width: null
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        marginLeft: 10
    },
    titleStyle: {
        fontSize: 17,
        color: '#fff',
    },
    dateStyle: {
        fontSize: 15,
        color: '#fff',
        marginBottom: 10
    }
};

export default MovieDetail;
