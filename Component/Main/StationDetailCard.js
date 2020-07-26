import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem } from 'native-base';

const StationDetailCard = ({ info }) => {
    return (
        <Card>
            <CardItem>
                <Text>{info}</Text>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({});

export default StationDetailCard;
