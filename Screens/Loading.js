import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/loadingScreen.png')}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
    },
});

export default Loading;
