import * as React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

const Station = () => {
    return (
        <View style={styles.container}>
            <ImageZoom
                cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={400}
                imageHeight={770}
            >
                <Image
                    source={require('../../img/map.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}
                />
            </ImageZoom>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3edfb',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Station;
