import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Regions = ({ stations, navigation }) => {
    return (
        <>
            <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: '#222f3e' }}
            >
                추천 지역
            </Text>
            <View style={styles.container}>
                {stations.map((station, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate('역 정보', {
                                region: station.region,
                                id: station.id,
                            });
                        }}
                    >
                        <Text style={{ color: '#222f3e', fontSize: 15 }}>
                            {station.region}
                        </Text>
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
        backgroundColor: '#f1f2f6',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 10,
    },
});

export default Regions;
