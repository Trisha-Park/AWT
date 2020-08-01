import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Left, Right } from 'native-base';

const Articles = ({ article }) => {
    const { createdAt, title, name} = article;

    // TODO: 리액트 네비게이터를 이용해서 ArticleDetail 페이지로 넘어가는 것을 구현해 주세요.
    // TODO: ArticleDetail 페이지로 받아온 개별 article의 내용들을 넘겨주세요

    return (
        <View style={styles.article}>
            <Left style={{ flexDirection: 'column' }}>
                <Text>{title}</Text>
            </Left>
            <Right>
                <Text>{createdAt}</Text>
                <Text>{name}</Text>
            </Right>
        </View>
    );
};

const styles = StyleSheet.create({
    article: {
        height: 70,
        width: 400,
    },
});

export default Articles;
