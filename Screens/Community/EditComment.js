import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Textarea } from 'native-base';
import { connect } from 'react-redux';
import axios from 'axios';

const EditComment = ({ route, navigation, userInfo, resourceToken }) => {
    const [commentEdit, setCommentEdit] = useState(
        route.params.comments.comment
    );

    const editComment = async () => {
        try {
            const { data } = await axios.put(
                `http://3.34.197.112:5050/comment/${route.params.communityId}/${route.params.commentId}`,
                {
                    userId: userInfo.userId,
                    name: userInfo.name,
                    comment: commentEdit,
                    secret: false,
                },
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View
            style={{
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                flex: 1,
            }}
        >
            <View style={styles.text}>
                <Textarea
                    value={commentEdit}
                    style={{
                        width: 390,
                        height: 280,
                        justifyContent: 'flex-start',
                        alignContent: 'flex-start',
                        padding: 5,
                        fontSize: 20,
                    }}
                    onChangeText={(text) => setCommentEdit(text)}
                ></Textarea>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    editComment();
                    navigation.navigate('글 알아보기');
                }}
            >
                <Text
                    style={{
                        color: '#ffffff',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    댓글 저장
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        height: 50,
        width: 400,
        backgroundColor: '#F1F2F6',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
    },
    text: {
        height: 300,
        width: 400,
        backgroundColor: '#F1F2F6',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#0066FF',
        width: 400,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 3,
        borderRadius: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
        userInfo: state.authReducer.userInfo,
    };
};

export default connect(mapStateToProps)(EditComment);
