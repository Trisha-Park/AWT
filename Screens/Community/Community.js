import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';

import { EvilIcons } from '@expo/vector-icons';
import Articles from '../../Component/Community/Articles';
import Loading from '../../Screens/Loading';
import axios from 'axios';
import { connect } from 'react-redux';

import { useIsFocused } from '@react-navigation/native';

const Community = ({ navigation, resourceToken }) => {
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getPostData = async () => {
        try {
            setIsArticleLoading(true);
            const { data } = await axios.get(
                'http://192.168.0.5:5050/community',
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );
            setArticles([...data]);
            setIsArticleLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

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
        <Loading />
    ) : (
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F1F2F6',
                flex: 1,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    marginTop: 5,
                }}
            >
                <View style={styles.search}>
                    <TextInput
                        style={styles.TextInput}
                        value={searchValue}
                        placeholder='원하는 게시물을 찾아보세요 = ) '
                        onChangeText={(text) => {
                            setSearchValue(text);
                        }}
                    ></TextInput>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 20,
                        marginTop: 5,
                    }}
                    onPress={() => {
                        navigation.navigate('CommunitySearch', {
                            searchValue: searchValue,
                            articles: articles,
                        });
                    }}
                >
                    <EvilIcons name='search' size={35} color='#0066FF' />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.article}>
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
            </ScrollView>
            <View style={styles.fix}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('CreateArticle');
                        navigation = { navigation };
                    }}
                >
                    <Text style={{ color: '#ffffff',fontSize : 20, fontWeight : "bold" }}>글쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        height: 50,
        padding: 10,
        margin: 10,
        marginBottom: 5,
        alignSelf: 'stretch',
    },
    TextInput: {
        width: 300,
        height: 50,
        fontSize: 20,
    },
    fix: {
        position: 'absolute',
        bottom: 5,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    button: {
        position: 'relative',
        width: 395,
        height: 50,
        backgroundColor: '#0066FF',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        borderRadius: 20,
        bottom: 10,
    },
    article: {
        marginTop: 10,
        marginBottom: 65,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(Community);
