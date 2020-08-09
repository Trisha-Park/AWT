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

    //console.log(articleDetailForEdit.imageURL);

    const editArticle = async () => {
        try {
            // const formData = new FormData();
            // formData.append('imageURL', route.params.articleDetail.imageURL);
            // formData.append('userId', userInfo.userId);
            // formData.append('name', userInfo.name);
            // formData.append('title', titleEdit);
            // formData.append('article', contentEdit);

            const { data } = await axios.put(
                `http://192.168.0.5:5050/community/${articleDetailForEdit._id}`,
                {
                    userId : userInfo.userId,
                    name : userInfo.name,
                    title : titleEdit,
                    article : contentEdit
                },
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );
            //console.log(data);
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
                                padding: 5,
                                textAlignVertical: 'top',
                                fontSize: 18,
                            }}
                            onChangeText={(text) => {
                                setContentEdit(text);
                            }}
                        ></Textarea>
                    </View>
                </View>
                <View style={{alignItems : "center"}}>
                    <Image
                        source={{ uri: articleDetailForEdit.imageURL }}
                        style={{ width: 200, height: 200, margin: 10 }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        editArticle();
                        navigation.navigate('ArticleDetail');
                    }}
                >
                    <Text style={{ color: '#ffffff' }}>글쓰기</Text>
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
        userInfo: state.authReducer.userInfo,
        resourceToken: state.authReducer.resourceToken,
    };
};

export default connect(mapStateToProps)(EditArticleDetail);
