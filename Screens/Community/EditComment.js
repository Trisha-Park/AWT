import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import axios from 'axios';

const EditComment = ({ route }) => {
    const [commentEdit, setCommentEdit] = useState(
        route.params.comments.comment
    );

    console.log(route.params.comments.comment);

    const editComment = async () => {
        try {
            const { data } = await axios.put(
                `http://192.168.0.5:5050/comment/${route.params.communityId}/${route.params.commentId}`,
                {
                    userId: 1,
                    name: 'trisha',
                    comment: commentEdit,
                    secret: false,
                }
            );
        } catch (error) {
            console.log(data);
        }
    };

    return (
        <View>
            <View>
                <TextInput
                    value={commentEdit}
                    onChangeText={(text) => setCommentEdit(text)}
                    placeholder='hello'
                ></TextInput>
            </View>
            <TouchableOpacity
                onPress={() => {
                    editComment();
                }}
            >
                <Text>저장</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditComment;
