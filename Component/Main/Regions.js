import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Regions = ({ regions, navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>추천 지역</Text>
            <View style={styles.container}>
                {regions.map((region, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate('StationDetail', {
                                region,
                            });
                        }}
                    >
                        <Text>{region}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    card: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default Regions;
