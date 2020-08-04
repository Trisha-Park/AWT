import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List, Card } from 'native-base';
import { StackActions } from '@react-navigation/native';

import Articles from '../../Component/Community/Articles';
import { userArticles } from '../../FakeData/userData';

import axios from 'axios';

const MyArticle = ({ navigation }) => {
    const [isMyArticleLoading, setIsMyArticleLoading] = useState(false);
    const [myArticles, setMyArticles] = useState([...userArticles]);

    // TODO: 서버로부터 articles 정보를 props로 받아온 유저id, useEffect, setArticles, Axios를 이용해 받아와야 합니다.
    const getMyArticle = async () => {
        try {
            setIsMyArticleLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/user/myPosts/1`
            );
            setMyArticles([...data]);
            setIsMyArticleLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyArticle();
    }, []);

    return isMyArticleLoading ? (
        <View>
            <Text>로딩중</Text>
        </View>
    ) : (
        <View>
            <View style={styles.myArticle}>
                <Card style={styles.card}>
                    <Text>내가 쓴 게시글</Text>
                </Card>
            </View>

            {myArticles.map((myArticle, idx) => (
                <TouchableOpacity
                    key={idx}
                    style={styles.article}
                    onPress={() => {
                        navigation.navigate('MyArticleDetail', {
                            id: myArticle._id,
                        });
                        console.log(myArticle);
                    }}
                >
                    <Articles article={myArticle} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    myArticle: {
        position: 'relative',
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        position: 'relative',
        height: 80,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellowgreen',
    },
    article: {
        position: 'relative',
        marginTop: 10,
    },
});

export default MyArticle;
