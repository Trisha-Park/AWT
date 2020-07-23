import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List } from 'native-base';
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

const Community = () => {
    return (
        <View style={styles.article}>
            <TouchableOpacity>
                <List>
                    {dummy.map((data, idx) => (
                        <Articles key={idx} article={data}></Articles>
                    ))}
                </List>
            </TouchableOpacity>
            <View style={styles.fix}>
                <TouchableOpacity style={styles.button}>
                    <Text>🖋글쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fix: {
        position: 'absolute',
        top: 650,
        left: 57,
    },
    button: {
        width: 300,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        borderRadius: 5,
    },
    article: {
        marginTop: 100,
    },
});

export default Community;
