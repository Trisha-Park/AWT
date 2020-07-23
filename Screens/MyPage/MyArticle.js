import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List, Card } from 'native-base';

import Articles from '../../Component/Community/Articles';
import { userArticles } from '../../FakeData/userData';

const MyArticle = () => {
    const [articles, setArticles] = useState([...userArticles]);

    // TODO: 서버로부터 articles 정보를 props로 받아온 유저id, useEffect, setArticles, Axios를 이용해 받아와야 합니다.

    return (
        <View>
            <View style={styles.myArticle}>
                <Card style={styles.card}>
                    <Text>내가 쓴 게시글</Text>
                </Card>
            </View>
            <View style={styles.article}>
                <List>
                    {articles.map((data, idx) => (
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
