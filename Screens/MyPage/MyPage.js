import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, List, ListItem } from 'native-base';

import { userInfo } from '../../FakeData/userData';

const MyPage = () => {
    const [userName, setUserName] = useState(userInfo.userName);
    const [userId, setUserId] = useState(userInfo.userId);

    // TODO: 유저 정보를 useEffect, axios를 이용해서 받아와야 합니다.
    // TODO: 내가 쓴 게시글을 클릭했을 때 리액트 네비게이터를 이용해 유저 id 정보를 넘겨주고, 페이지를 이동해 주세요.

    return (
        <View>
            <Card style={styles.userCard}>
                <Card style={styles.nameCard}>
                    <Text>{userName} 님</Text>
                </Card>
            </Card>
            <List style={styles.allList}>
                <Card>
                    <ListItem>
                        <Text>내가 쓴 게시글</Text>
                    </ListItem>
                </Card>
                <Card>
                    <ListItem>
                        <Text>공지사항</Text>
                    </ListItem>
                    <ListItem>
                        <Text>커뮤니티 규칙</Text>
                    </ListItem>
                    <ListItem>
                        <Text>FAQ</Text>
                    </ListItem>
                </Card>
                <Card>
                    <ListItem>
                        <Text>설정</Text>
                    </ListItem>
                    <ListItem>
                        <Text>리뷰쓰기</Text>
                    </ListItem>
                </Card>
            </List>
        </View>
    );
};
const styles = StyleSheet.create({
    userCard: {
        position: 'relative',
        marginTop: -100,
        height: 200,
        width: 400,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
    },
    nameCard: {
        position: 'relative',
        height: 80,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellowgreen',
    },
    allList: {
        position: 'relative',
        width: 400,
        backgroundColor: 'navy',
    },
});

export default MyPage;
