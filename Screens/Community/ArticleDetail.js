import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { CardItem, Card, ListItem, Left } from 'native-base';

// TODO: props로 받은 route의 params에서 받아온 정보들을 뿌려주세요
const ArticleDetail = () => {
    return (
        <View>
            <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                    <Text>Everybody Talking about Jamie!</Text>
                    <CardItem style={styles.cardVisit}>
                        <Text>100</Text>
                    </CardItem>
                </CardItem>
                <CardItem style={styles.cardAuthor}>
                    <Text>Trisha</Text>
                </CardItem>
                <CardItem style={styles.cardItem}>
                    <Text>
                        당신은 사랑 받기 위해 태어난 사람 모두가 말해! 제이미에
                        대해!
                    </Text>
                </CardItem>
            </Card>
            <TouchableOpacity>
                <TouchableOpacity style={styles.comment}>
                    <ListItem>
                        <Left>
                            <Text>
                                Out of Darkness!~ In to the Spotlight~!!
                            </Text>
                        </Left>
                    </ListItem>
                </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.input}>
                <TextInput style={styles.inputText}></TextInput>
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
        marginTop: -190,
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
    comment: {
        width: 395,
        position: 'relative',
        marginTop: 5,
        justifyContent: 'center',
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
