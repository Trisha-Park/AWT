import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import axios from 'axios';

const EditArticleDetail = ({ route }) => {
    const [articleDetailForEdit, setArticleDetailForEdit] = useState({
        ...route.params.articleDetail,
    });
    const [titleEdit, setTitleEdit] = useState(articleDetailForEdit.title);
    const [contentEdit, setContentEdit] = useState(
        articleDetailForEdit.article
    );

    const editArticle = async () => {
        try {
            const { data } = await axios.put(
                `http://192.168.0.5:5050/community/${articleDetailForEdit._id}`,
                {
                    userId: 1,
                    name: 'trisha',
                    title: titleEdit,
                    article: contentEdit,
                }
            );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <View>
                <View style={styles.title}>
                    <TextInput
                        value={titleEdit}
                        onChangeText={(text) => {
                            setTitleEdit(text);
                        }}
                    ></TextInput>
                </View>
                <View>
                    <View style={styles.text}>
                        <TextInput
                            value={contentEdit}
                            onChangeText={(text) => {
                                setContentEdit(text);
                            }}
                        ></TextInput>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        editArticle();
                    }}
                >
                    <Text>저장하기</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        height: 40,
        width: 400,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 50,
        padding: 10,
    },
    text: {
        height: 300,
        width: 400,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: 'pink',
        width: 400,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 3,
    },
});

export default EditArticleDetail;
