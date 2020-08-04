import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { CardItem, Card } from 'native-base';
import axios from 'axios';

import Comments from '../../Component/Community/Comments';

// TODO: props로 받은 route의 params에서 받아온 정보들을 뿌려주세요
const ArticleDetail = ({ route, navigation }) => {
    const [isArticleDetailLoading, setIsArticleDetailLoading] = useState(false);
    const [articleDetail, setArticleDetail] = useState({});
    const [comments, setComment] = useState([]);
    const [commentValue, setCommentValue] = useState('');

    const getPostView = async () => {
        try {
            setIsArticleDetailLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/community/${route.params.id}`
            );
            console.log('로딩 완료');
            setArticleDetail({ ...data[0] });
            setIsArticleDetailLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getCommentView = async () => {
        try {
            setIsArticleDetailLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/comment/${route.params.id}`
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
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const communityDelete = async () => {
        try {
            const { data } = await axios.delete(
                `http://192.168.0.5:5050/community/${route.params.id}/1`
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPostView();
        getCommentView();
    }, []);

    return isArticleDetailLoading ? (
        <View />
    ) : (
        <View>
            <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                    <Text>{articleDetail.title}</Text>
                    <CardItem style={styles.cardVisit}>
                        <Text>{articleDetail.view}</Text>
                    </CardItem>
                </CardItem>
                <CardItem style={styles.cardAuthor}>
                    <Text>{articleDetail.name}</Text>
                </CardItem>
                <CardItem style={styles.cardItem}>
                    <Text>{articleDetail.article}</Text>
                </CardItem>
            </Card>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('EditArticleDetail', {
                            articleDetail,
                        });
                    }}
                >
                    <Text>편집하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        communityDelete();
                    }}
                >
                    <Text>삭제</Text>
                </TouchableOpacity>
            </View>
            <View>
                {comments.map((comment, idx) => (
                    <TouchableOpacity key={idx}>
                        <Comments
                            comments={comment}
                            route={route}
                            navigation={navigation}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View></View>
            <View style={styles.input}>
                <TextInput
                    style={styles.inputText}
                    value={commentValue}
                    onChangeText={(text) => {
                        setCommentValue(text);
                    }}
                ></TextInput>
                <TouchableOpacity
                    sytle={styles.button}
                    onPress={() => {
                        commentCreate();
                        getCommentView();
                    }}
                >
                    <Text> 댓글쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        marginTop: 30,
        width: 395,
        height: 300,
    },
    cardItem: {
        height: 40,
        position: 'relative',
    },
    cardVisit: {
        height: 40,
        position: 'relative',
        marginLeft: 155,
    },
    cardAuthor: {
        position: 'relative',
        marginTop: -10,
        marginLeft: 2,
    },

    input: {
        position: 'relative',
        flexDirection: 'row',
        top: 280,
        height: 60,
        alignSelf: 'stretch',
        backgroundColor: 'lavender',
        padding: 10,
    },
    inputText: {
        width: 340,
        height: 40,
        backgroundColor: 'lavender',
    },
    button: {
        position: 'relative',
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        borderRadius: 5,
    },
});

export default ArticleDetail;
