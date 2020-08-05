import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import Articles from '../../Component/Community/Articles';
import axios from 'axios';

import { useIsFocused } from '@react-navigation/native';

const Community = ({ navigation }) => {
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getPostData = async () => {
        try {
            setIsArticleLoading(true);
            const { data } = await axios.get(
                'http://192.168.0.5:5050/community'
            );
            setArticles([...data]);
            setIsArticleLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    //console.log(articles);

    useEffect(() => {
        getPostData();
    }, []);

    const isFocused = useIsFocused();

    useEffect(() => {
        try {
            if (isFocused) {
                getPostData();
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

    return isArticleLoading ? (
        <View style={styles.fix}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('CreateArticle');
                    navigation = { navigation };
                }}
            >
                <Text>🖋글쓰기</Text>
            </TouchableOpacity>
            <Text>로딩중</Text>
        </View>
    ) : (
        <View>
            <View>
                <TextInput
                    value={searchValue}
                    onChangeText={(text) => {
                        setSearchValue(text);
                    }}
                ></TextInput>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CommunitySearch', {
                            searchValue: searchValue,
                            articles: articles,
                        });
                    }}
                >
                    <Text>검색</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.article}>
                {articles.map((article, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => {
                            navigation.navigate('ArticleDetail', {
                                id: article._id,
                            });
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
                        navigation = { navigation };
                    }}
                >
                    <Text>🖋글쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
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
