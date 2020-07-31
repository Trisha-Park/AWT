import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem, View } from 'native-base';

const StationDetailCard = ({ data }) => {
    const { name, info, address, phone } = data;
    // console.log(data);
    return (
        <Card>
            <View>
                <Text>{name}</Text>
                <Text>{info}</Text>
            </View>
            <View>
                <Text>{address}</Text>
                <Text>{phone}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({});

export default StationDetailCard;
