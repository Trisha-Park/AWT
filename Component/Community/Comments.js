import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'native-base';
import axios from 'axios';

const Comments = ({ comments, route, navigation }) => {
    const commentDelete = async () => {
        try {
            const { data } = await axios.delete(
                `http://192.168.0.5:5050/comment/${comments._id}`
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <TouchableOpacity style={styles.comment}>
                <ListItem>
                    <Text>{comments.name}</Text>
                    <Text>{comments.comment}</Text>
                </ListItem>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('EditComment', {
                            comments,
                            communityId: route.params.id,
                            commentId: comments._id,
                        });
                    }}
                >
                    <Text>편집</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        commentDelete();
                    }}
                >
                    <Text>삭제</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </>
    );
};
const styles = StyleSheet.create({
    comment: {
        width: 395,
        position: 'relative',
        marginTop: 5,
        justifyContent: 'center',
    },
});

export default Comments;
