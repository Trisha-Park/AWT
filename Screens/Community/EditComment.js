import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

const EditComment = ({ route, navigation, userInfo, resourceToken }) => {
    const [commentEdit, setCommentEdit] = useState(
        route.params.comments.comment
    );

    console.log(route.params.comments.comment);

    const editComment = async () => {
        try {
            const { data } = await axios.put(
                `http://192.168.0.5:5050/comment/${route.params.communityId}/${route.params.commentId}`,
                {
                    userId: userInfo.userId,
                    name: userInfo.name,
                    comment: commentEdit,
                    secret: false,
                },                {
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
                <TextInput
                    value={commentEdit}
                    style={{
                        width: 390,
                        height: 280,
                        justifyContent: 'flex-start',
                        alignContent: 'flex-start',
                        padding: 5,
                        textAlignVertical: 'top',
                        fontSize: 18,
                    }}
                    onChangeText={(text) => setCommentEdit(text)}
                ></TextInput>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    editComment();
                    navigation.navigate('ArticleDetail');
                }}
            >
                <Text style={{ color: '#ffffff' }}>저장</Text>
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
    },
    button: {
        backgroundColor: '#0066FF',
        width: 400,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 3,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
        userInfo: state.authReducer.userInfo,
    };
};

export default connect(mapStateToProps)(EditComment);
