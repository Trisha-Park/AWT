import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'native-base';
import axios from 'axios';

import { connect } from 'react-redux';



const Comments = ({ comments, route, navigation, resourceToken }) => {
    console.log(comments._id);
    const commentDelete = async () => {
        try {
            const { data } = await axios.delete(
                `http://192.168.0.5:5050/comment/${comments._id}`,
                {
                    headers: { authorization : resourceToken },
                    withCredentials: true,
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
    //console.log(resourceToken);
    
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

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(Comments);
