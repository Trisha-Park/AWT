import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Comments = ({ comments, route, navigation, resourceToken, isCommentUser}) => {

    const commentDelete = async () => {
        try {
            const { data } = await axios.delete(
                `http://192.168.0.5:5050/comment/${comments._id}`,
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
        <View>
            <View style={styles.comment}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {comments.name}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16 }}>{comments.comment}</Text>
                </View>
{/* 
                { isCommentUser ? ( */}
                <View
                    style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
                >
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => {
                            navigation.navigate('EditComment', {
                                comments,
                                communityId: route.params.id,
                                commentId: comments._id,
                            });
                        }}
                    >
                        <Feather name='edit' size={24} color='black' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginRight: 5 }}
                        onPress={() => {
                            commentDelete();
                        }}
                    >
                        <AntDesign name='delete' size={24} color='black' />
                    </TouchableOpacity>
                </View>
                {/* //  ) : (<></>) }  */}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    comment: {
        width: 395,
        marginTop: 5,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
        userInfo: state.authReducer.userInfo,
    };
};

export default connect(mapStateToProps)(Comments);
