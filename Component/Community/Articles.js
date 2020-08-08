import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Articles = ({ article }) => {
    const { updatedAt, title, name} = article;
    //console.log(article);
    // TODO: 리액트 네비게이터를 이용해서 ArticleDetail 페이지로 넘어가는 것을 구현해 주세요.
    // TODO: ArticleDetail 페이지로 받아온 개별 article의 내용들을 넘겨주세요

    return (
        <View style={styles.article}>
            <View
                style={{
                    height: 70,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View>
                <Text style={styles.date}>{updatedAt}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    article: {
        height: 90,
        width: 400,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        margin: 5,
        padding: 10,
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight : "bold"
    },
    name: {
        fontStyle: 'normal',
        color: '#454545',
        fontSize: 18,
        color : "#787878"
    },
    date: {
        fontSize: 18,
        color : "#787878"
    },
});

export default Articles;
