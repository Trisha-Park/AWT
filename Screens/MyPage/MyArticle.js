import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Articles from '../../Component/Community/Articles';
import { userArticles } from '../../FakeData/userData';
import Loading from '../Loading';

import axios from 'axios';
import { connect } from 'react-redux';

const MyArticle = ({ navigation, resourceToken, userInfo }) => {
    const [isMyArticleLoading, setIsMyArticleLoading] = useState(false);
    const [myArticles, setMyArticles] = useState([...userArticles]);

    const getMyArticle = async () => {
        try {
            setIsMyArticleLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/user/myPosts`,
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
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
        <Loading />
    ) : (
        <View
        style={{
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F1F2F6',
            flex: 1,
            paddingTop : 5
        }}>

            <ScrollView>
            {myArticles.map((myArticle, idx) => (
                <TouchableOpacity
                    key={idx}
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
        userInfo: state.authReducer.userInfo,
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(MyArticle);
