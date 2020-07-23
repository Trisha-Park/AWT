import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List, Card } from 'native-base';
import Articles from '../../Component/Community/Articles';

const dummy = [
    {
        title: 'H ㅏ... 살려줘라',
        author: 'Trisha',
        date: '2020.07.21',
        data: '낵아 웨 후론투웬드를 간닥오 핵아직오',
    },
    {
        title: '번개 ㄱ?',
        author: '번개러버',
        date: '2020.07.21',
        data: '서울역 노숙 번개 구함',
    },
    {
        title: '젲쭈또에써 여낀안또ㅒ요',
        author: '까찌마쪠빨',
        date: '2020.07.21',
        data: '않이 진짜 여긴 안또ㅒ',
    },
];

const MyArticle = () => {
    return (
        <View>
            <View style={styles.myArticle}>
                <Card style={styles.card}>
                    <Text>내가 쓴 게시글</Text>
                </Card>
            </View>
            <View style={styles.article}>
                <List>
                    {dummy.map((data, idx) => (
                        <Articles key={idx} article={data}></Articles>
                    ))}
                </List>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    myArticle: {
        position: 'relative',
        marginTop: -300,
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
