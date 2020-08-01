import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Articles from '../../Component/Community/Articles';
import axios from 'axios';

const Community = ({ navigation }) => {
    const [isArticleLoading, setIsArticleLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    const getPostData = async () => {
        try {
            setIsArticleLoading(true);
            const { data } = await axios.get(
                'http://192.168.0.5:5050/community'
            );
            setArticles([ ...data ]);
            setIsArticleLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    return isArticleLoading ? (
        <View />
    ) : (
        <>
            <View style={styles.article}>
                {articles.map((article, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => {
                            navigation.navigate('ArticleDetail', { id: article._id });
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
