import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, List, ListItem } from 'native-base';

import { connect } from 'react-redux';

const MyPage = ({ navigation, userInfo }) => {

    // TODO: 유저 정보를 리덕스에 저장 => 이거는 로긴하자마자 할것입니다

    return (
        <View style={styles.container}>
            <Card style={styles.userCard}>
                <Card style={styles.nameCard}>
                    <Text> {userInfo.name} 님</Text>
                </Card>
            </Card>
            <View style={styles.allList}>
                <Card>
                    <List>
                        <ListItem
                            onPress={() => {
                                // TODO: 내 계획 네비게이션
                                navigation.navigate('MyPlans');
                            }}
                        >
                            <Text>내 계획</Text>
                        </ListItem>
                        <ListItem
                            onPress={() => {
                                navigation.navigate('MyArticle');
                            }}
                        >
                            <Text>내가 쓴 게시글</Text>
                        </ListItem>
                        <ListItem
                            onPress={() => {
                                navigation.navigate('MyScrap');
                            }}
                        >
                            <Text>스크랩한 게시글</Text>
                        </ListItem>
                    </List>
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
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    userCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
        alignSelf: 'stretch',
    },
    nameCard: {
        height: 80,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellowgreen',
    },
    allList: {
        position: 'relative',
        flex: 3.5,
        alignSelf: 'stretch',
        backgroundColor: 'navy',
    },
});

const mapStateToProps = (state) => {
    return {
        userInfo: state.authReducer.userInfo,
    };
};

export default connect(mapStateToProps)(MyPage);
