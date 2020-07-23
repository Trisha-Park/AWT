import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Left, ListItem, Right } from 'native-base';

const Articles = ({ article }) => {
    const { author, date, title } = article;

    const onPress = () => {
        // TODO: 리액트 네비게이터를 이용해서 ArticleDetail 페이지로 넘어가는 것을 구현해 주세요.
        // TODO: ArticleDetail 페이지로 받아온 개별 article의 내용들을 넘겨주세요
    };

    return (
        <TouchableOpacity style={styles.article} onPress={onPress}>
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
