import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, CardItem, View } from 'native-base';
import * as Linking from 'expo-linking';

const StationDetailCard = ({ data }) => {
    const { blogName, date, description, href, title } = data;
    return (
        <Card>
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL(href);
                }}
            >
                <View>
                    <Text>{title}</Text>
                    <Text>{blogName}</Text>
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text>{description}</Text>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

const styles = StyleSheet.create({});

export default StationDetailCard;
