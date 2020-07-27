import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { CardItem, Card, ListItem, Left } from 'native-base';

import Comments from '../../Component/Community/Comments';

import { articleDummy } from '../../FakeData/communityData';
import { commentDummy } from '../../FakeData/commentData';

// TODO: props로 받은 route의 params에서 받아온 정보들을 뿌려주세요
const ArticleDetail = ({ route }) => {
    const [articleDetail, setArticleDetail] = useState({
        ...articleDummy[route.params.id],
    });
    const [comments, setComment] = useState([...commentDummy]);
    const { title, author, date, data, visit } = articleDetail;
    const [commentValue, setCommentValue] = useState('');

    return (
        <View>
            <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                    <Text>{title}</Text>
                    <CardItem style={styles.cardVisit}>
                        <Text>{visit}</Text>
                    </CardItem>
                </CardItem>
                <CardItem style={styles.cardAuthor}>
                    <Text>{author}</Text>
                </CardItem>
                <CardItem style={styles.cardItem}>
                    <Text>{data}</Text>
                </CardItem>
            </Card>
            <View>
                {comments.map((comment, idx) => (
                    <TouchableOpacity key={idx}>
                        <Comments
                            comments={comment}
                            onChangeText={(text) => {
                                setCommentValue(text);
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.input}>
                <TextInput
                    style={styles.inputText}
                    value={commentValue}
                    on
                ></TextInput>
                <TouchableOpacity sytle={styles.button}>
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
        backgroundColor: 'lavender',
        height: 300,
    },
    cardItem: {
        height: 40,
        position: 'relative',
        backgroundColor: 'lavender',
    },
    cardVisit: {
        height: 40,
        position: 'relative',
        marginLeft: 155,
        backgroundColor: 'lavender',
    },
    cardAuthor: {
        position: 'relative',
        marginTop: -10,
        marginLeft: 2,
        backgroundColor: 'lavender',
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
