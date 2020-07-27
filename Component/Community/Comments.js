import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'native-base';

const Comments = ({ comments }) => {
    return (
        <>
            <TouchableOpacity style={styles.comment}>
                <ListItem>
                        <Text>{comments.name}</Text>
                        <Text>{comments.comment}</Text>
                </ListItem>
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
