import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import axios from 'axios';
import { connect } from 'react-redux';
import { Textarea } from 'native-base';

const EditArticleDetail = ({ route, navigation, userInfo, resourceToken }) => {
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
                `http://3.34.197.112:5050/community/${articleDetailForEdit._id}`,
                {
                    userId: userInfo.userId,
                    name: userInfo.name,
                    title: titleEdit,
                    article: contentEdit,
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
            }}
        >
            <View>
                <View style={styles.title}>
                    <TextInput
                        value={titleEdit}
                        style={{ fontSize: 20 }}
                        onChangeText={(text) => {
                            setTitleEdit(text);
                        }}
                    ></TextInput>
                </View>
                <View>
                    <View style={styles.text}>
                        <Textarea
                            value={contentEdit}
                            style={{
                                width: 390,
                                height: 280,
                                justifyContent: 'flex-start',
                                alignContent: 'flex-start',
                                textAlignVertical: 'top',
                                fontSize: 20,
                            }}
                            onChangeText={(text) => {
                                setContentEdit(text);
                            }}
                        ></Textarea>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                   { articleDetailForEdit.imageURL &&
                    <Image
                        source={{ uri: articleDetailForEdit.imageURL }}
                        style={{ width: 200, height: 200, margin: 10 }}
                    />
                   }
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        editArticle();
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
                        글쓰기
                    </Text>
                </TouchableOpacity>
            </View>
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
        borderRadius : 20
    },
    text: {
        height: 300,
        width: 400,
        backgroundColor: '#F1F2F6',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius : 20
    },
    button: {
        backgroundColor: '#0066FF',
        width: 400,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 3,
        borderRadius : 20
    },
});

const mapStateToProps = (state) => {
    return {
        userInfo: state.authReducer.userInfo,
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(EditArticleDetail);
