import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import { EvilIcons } from '@expo/vector-icons';
import Articles from '../../Component/Community/Articles';
import Loading from '../../Screens/Loading';
import axios from 'axios';
import { connect } from 'react-redux';

import { useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

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
            <Loading />
    ) : (
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#ffffff',
            }}
        >
            <View style= {{flexDirection : "row", justifyContent : "space-between", alignSelf : "stretch", alignItems : "center", marginTop : 5}}>
                <View style={styles.search}>
                <TextInput
                    style={styles.TextInput}
                    value={searchValue}
                    onChangeText={(text) => {
                        setSearchValue(text);
                    }}
                ></TextInput>
                </View>
                <TouchableOpacity 
                    style = {{width : 50, height :50, justifyContent : "center" , alignItems : "center", marginRight : 20, marginTop : 5 }}
                    onPress={() => {
                        navigation.navigate('CommunitySearch', {
                            searchValue: searchValue,
                            articles: articles,
                        });
                    }}
                >
                    <EvilIcons name='search' size={30} color='black' />
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
                    <Text style={{ color: '#ffffff' }}>글쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        backgroundColor: '#F1F2F6',
        borderRadius : 25,
        justifyContent : "center",
        alignItems : "center",
        width : 330,
        height : 50,
        padding : 10,
        margin : 10,
        marginBottom : 5,
        alignSelf : "stretch"
    },
    TextInput: {
        width: 310,
        height: 50,
    },
    searchText : {

    },
    fix: {
        position: 'absolute',
        bottom: 30,
        alignContent: 'center',
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    button: {
        width: 60,
        backgroundColor: '#0066FF',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        borderRadius: 5,
        bottom : 50
    },
    article: {
        marginTop: 10,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(Community);
