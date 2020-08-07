import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, Alert } from 'react-native';
import { Card, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { signOutSuccess } from '../../Actions/authActions';

import { connect } from 'react-redux';

const MyPage = ({ navigation, signOutSuccess, userInfo }) => {

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
                    <ListItem
                        onPress={() => {
                            Alert.alert(
                                '로그아웃',
                                '정말로 로그아웃하시겠습니까?',
                                [
                                    {
                                        text: '로그아웃',
                                        onPress: () => {
                                            console.log('로그아웃');

                                            signOutSuccess();
                                            if (Platform.OS === 'android') {
                                                ToastAndroid.show(
                                                    '로그아웃되었습니다.',
                                                    ToastAndroid.BOTTOM,
                                                    ToastAndroid.LONG
                                                );
                                            }
                                        },
                                    },
                                    {
                                        text: '취소',
                                        onPress: () => {
                                            console.log('취소');
                                        },
                                    },
                                ]
                            );
                        }}
                    >
                        <Text>로그아웃</Text>
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

const mapDispatchToProps = (dispatch) => {
    return {
        signOutSuccess: () => dispatch(signOutSuccess()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);

