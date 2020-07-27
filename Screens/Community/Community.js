import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List } from 'native-base';

import Articles from '../../Component/Community/Articles';

import { articleDummy } from '../../FakeData/communityData';

const Community = ({ navigation }) => {
    const [articles, setArticles] = useState([...articleDummy]);
    // TODO: 화면 들어오자마자 axios get 요청 (useEffect, setArticles, Axios 사용)

    return (
        <>
            <View style={styles.article}>
                {articles.map((article, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => {
                            navigation.navigate('ArticleDetail', { id: idx });
                        }}
                    >
                        <Articles article={article} />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.fix}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('CreateArticle');
                    }}
                >
                    <Text>🖋글쓰기</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    fix: {
        position: 'absolute',
        top: 10,
        left: 57,
    },
    button: {
        width: 300,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        borderRadius: 5,
    },
    article: {
        marginTop: 100,
    },
});

export default Community;
