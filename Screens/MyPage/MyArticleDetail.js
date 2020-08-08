import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {Textarea} from "native-base";

import axios from 'axios';
import { connect } from 'react-redux';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Comments from '../../Component/Community/Comments';
import Loading from '../Loading';

const MyArticleDetail = ({ route, navigation, resourceToken, userInfo }) => {
    const [isArticleDetailLoading, setIsArticleDetailLoading] = useState(false);
    const [articleDetail, setArticleDetail] = useState({});
    const [comments, setComment] = useState([]);
    const [commentValue, setCommentValue] = useState('');
    const [isUser, setIsUser] = useState(false);
    // const [isCommentUser, setIsCommentUser] = useState(false);

    const getPostView = async () => {
        try {
            setIsArticleDetailLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/community/${route.params.id}`,
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
                   
            );
            setArticleDetail({ ...data[0] });
            setIsUser(data[0].userId === userInfo.userId ? true : false);
            setIsArticleDetailLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getCommentView = async () => {
        try {
            setIsArticleDetailLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/comment/${route.params.id}`,
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
                   
            );
            setComment([...data]);
            setIsArticleDetailLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const commentCreate = async () => {
        try {
            const { data } = await axios.post(
                `http://192.168.0.5:5050/comment/${route.params.id}`,
                {
                    userId: 1,
                    name: 'trisha',
                    comment: commentValue,
                    secret: false,
                },
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
                   
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPostView();
        getCommentView();
    }, []);

    const isFocused = useIsFocused();
    useEffect(() => {
        try {
            if (isFocused) {
                getPostView();
                getCommentView();
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

    return isArticleDetailLoading ? (
        <Loading />
    ) : (
        <View
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        }}
    >
        <ScrollView
            style={{
                width: '95%',
            }}
        >
            <View
                style={{
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        backgroundColor: '#ffffff',
                        paddingVertical: 10,
                    }}
                >
                    <View style={{ paddingLeft: 5 }}>
                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                            {articleDetail.title}
                        </Text>
                    </View>
                    <View
                        style={{ alignSelf: 'flex-end', paddingRight: 10 }}
                    >
                        <Text>{articleDetail.view}</Text>
                    </View>
                </View>
                <View>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            marginBottom: 10,
                        }}
                    >
                        <View>
                            {articleDetail.imageURL && (
                                <Image
                                    source={{ uri: articleDetail.imageURL }}
                                    style={{
                                        width: 380,
                                        height: 380,
                                        borderRadius: 20,
                                    }}
                                />
                            )}
                        </View>
                        <View
                            style={{ marginTop: 5, alignItems: 'stretch' }}
                        >
                            <View
                                style={{
                                    height: 34,
                                    width: 380,
                                    borderBottomWidth: 0.2,
                                    borderBottomColor: '#DFE4EA',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        paddingLeft: 5,
                                    }}
                                >
                                    {articleDetail.name}
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        marginTop: 10,
                                        paddingLeft: 5,
                                    }}
                                >
                                    {articleDetail.article}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#ffffff',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}
            >
                {isUser ? (
                    <>
                        <TouchableOpacity
                            stytle={{}}
                            onPress={() => {
                                navigation.navigate('EditArticleDetail', {
                                    articleDetail,
                                });
                            }}
                        >
                            <Feather name='edit' size={34} color='blue' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert(
                                    '게시물을 삭제합니다.',
                                    '삭제한 게시물은 되돌릴 수 없습니다.',
                                    [
                                        {
                                            text: '삭제',
                                            onPress: () => {
                                                console.log(
                                                    'Article Delete Success'
                                                );
                                                communityDelete();
                                                navigation.navigate(
                                                    'Community'
                                                );
                                            },
                                        },
                                        {
                                            text: '취소',
                                            onPress: () => {
                                                console.log(
                                                    'Delete Cancle'
                                                );
                                            },
                                        },
                                    ]
                                );
                            }}
                        >
                            <AntDesign
                                name='delete'
                                size={34}
                                color='black'
                            />
                        </TouchableOpacity>
                    </>
                ) : (
                    <></>
                )}
                <TouchableOpacity
                    style={{
                        alignSelf: 'flex-end',
                        paddingRight: 5,
                    }}
                    onPress={() => {
                        scrapArticle();
                    }}
                >
                    <AntDesign name='star' size={34} color='#FFC312' />
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    {comments.map((comment, idx) => (
                        <View key={idx}>
                            <Comments
                                comments={comment}
                                route={route}
                                navigation={navigation}
                                //isCommentUser={isCommentUser}
                            />
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
        <View
            style={{
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                height: 70,
            }}
        >
            <Textarea
                style={{
                    backgroundColor: '#F1F2F6',
                    width: 340,
                    height: 50,
                    borderRadius: 20,
                    marginRight: 10,
                    padding: 15,
                }}
                value={commentValue}
                onChangeText={(text) => {
                    setCommentValue(text);
                }}
            ></Textarea>
            <TouchableOpacity
                onPress={() => {
                    getCommentView();
                    commentCreate();
                }}
            >
                <MaterialCommunityIcons
                    name='comment-arrow-left-outline'
                    size={34}
                    color='black'
                />
            </TouchableOpacity>
        </View>
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

export default connect(mapStateToProps)(MyArticleDetail);