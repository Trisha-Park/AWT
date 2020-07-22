import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { Card, CardItem } from 'native-base';

const PlanCardPlus = ({ addRegionCard }) => {
    return (
        <Card style={styles.card}>
            <CardItem
                style={{
                    top: 200,
                }}
            >
                <Button title='+' onPress={addRegionCard} />
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PlanCardPlus;
