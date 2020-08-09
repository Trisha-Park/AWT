import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { signOutSuccess } from '../../Actions/authActions';

const MyPage = ({ navigation, signOutSuccess, userInfo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userView}>
                <Text
                    style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        alignSelf : "center"
                    }}
                >
                    {userInfo.name} 님
                </Text>
                <View style={{
                    marginTop : 5
                    }}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        alignSelf : "center"
                    }}
                >
                    안녕하세요!
                </Text>
                </View>
            </View>
            <View style={styles.allView}>
                <View style={{ marginBottom: 20 }}>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('내 계획');
                        }}
                    >
                        <Text style={styles.fontInView}>내 계획</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('내가 쓴 게시글');
                        }}
                    >
                        <Text style={styles.fontInView}>내가 쓴 게시글</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('스크랩한 게시글');
                        }}
                    >
                        <Text style={styles.fontInView}>스크랩한 게시글</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.fontInView}>공지사항</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.fontInView}>커뮤니티 규칙</Text>
                    </TouchableOpacity>
                    <View style={styles.item}>
                        <Text style={styles.fontInView}>FAQ</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.item}>
                        <Text style={styles.fontInView}>설정</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.item}
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
                        <Text style={styles.fontInView}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F2F6',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    userView: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0066FF',
        alignSelf: 'stretch',
        borderRadius: 20,
        marginHorizontal : 5
    },
    allView: {
        marginTop: 10,
        width: 395,
        height: 500,
    },
    item: {
        marginVertical: 1,
        backgroundColor: '#ffffff',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 5,
    },
    fontInView: {
        fontSize: 26,
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
