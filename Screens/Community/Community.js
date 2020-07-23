import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List } from 'native-base';

import Articles from '../../Component/Community/Articles';
import { articleDummy } from '../../FakeData/communityData';

const Community = () => {
    const [articles, setArticles] = useState([...articleDummy]);
    // TODO: 화면 들어오자마자 axios get 요청 (useEffect, setArticles, Axios 사용)

    return (
        <View style={styles.article}>
            <TouchableOpacity>
                <List>
                    {articles.map((article, idx) => (
                        <Articles key={idx} article={article}></Articles>
                    ))}
                </List>
            </TouchableOpacity>
            <View style={styles.fix}>
                <TouchableOpacity style={styles.button}>
                    <Text>🖋글쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fix: {
        position: 'absolute',
        top: 650,
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
