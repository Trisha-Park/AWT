import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import Articles from '../../Component/Community/Articles';
import Loading from '../Loading';

import axios from 'axios';
import { connect } from 'react-redux';



const MyArticle = ({ navigation, resourceToken, userInfo }) => {
    const [isMyArticleLoading, setIsMyArticleLoading] = useState(false);
    const [myArticles, setMyArticles] = useState([]);

    const getMyArticle = async () => {
        try {
            setIsMyArticleLoading(true);
            const { data } = await axios.get(
                `http://3.34.197.112:5050/user/myPosts`,
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

    const isFocused = useIsFocused();
    useEffect(() => {
        try {
            if (isFocused) {
                getMyArticle();
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

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
                        navigation.navigate('내가 쓴 글 알아보기', {
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
