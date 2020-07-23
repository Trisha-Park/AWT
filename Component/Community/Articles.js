import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Left, ListItem, Right } from 'native-base';

const Articles = ({ article }) => {
    const { author, date, title } = article;
    return (
        <TouchableOpacity style={styles.article}>
            <ListItem>
                <Left style={{ flexDirection: 'column' }}>
                    <Text>{title}</Text>
                </Left>
                <Right>
                    <Text>{date}</Text>
                    <Text>{author}</Text>
                </Right>
            </ListItem>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    article: {
        height: 70,
        width: 400,
    },
});

export default Articles;
