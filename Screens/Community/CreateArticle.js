import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

const CreateArticle = ({ navigation, userInfo, resourceToken }) => {
    // const [imageObj, setImageObj] = useState({});
    const [image, setImage] = useState();
    // const [imageName, setImageName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { statusios } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
        }
        if (Constants.platform.android) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
        }
    };
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 1,
            });
            //console.log(result);
            if (!result.cancelled) {
                const splitName = result.uri.split('/');
                const hello = splitName[splitName.length - 1].toString();
                setImageName(hello);
                setImage(result.uri);
                setImageObj(result);
                //console.log(hello);
            }
        } catch (error) {
            console.log(error);
        }
    };
    //console.log(imageObj);

    const PostArticleButton = async () => {
        try {
            // const imageURL = new FormData();
            // imageURL.append('imageURL', {
            //     uri: imageObj.uri,
            //     name: imageName,
            //     type: 'image',
            //     height: imageObj.height,
            //     width: imageObj.width,
            // });

            const { data } = await axios.post(
                `http://192.168.0.5:5050/community`,
                {
                    //imageURL: imageURL,
                    userId: userInfo.userId,
                    name: 'trisha',
                    title,
                    article: content,
                },
                {
                    headers: {
                        authorization: resourceToken,
                        // 'content-type':
                        //     'multipart/form-data; boundary=<calculated when request is sent>',
                    },
                    withCredentials: true,
                }
            );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPermissionAsync();
    }, []);

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
                        placeholder='제목을 입력하세요.'
                        value={title}
                        style={{ fontSize: 20 }}
                        onChangeText={(text) => {
                            setTitle(text);
                        }}
                    ></TextInput>
                </View>
                <View style={styles.text}>
                    <TextInput
                        placeholder='내용을 입력하세요.'
                        style={{
                            width: 390,
                            height: 280,
                            justifyContent: 'flex-start',
                            alignContent: 'flex-start',
                            padding: 5,
                            textAlignVertical: 'top',
                            fontSize: 18,
                        }}
                        value={content}
                        multiline={true}
                        onChangeText={(text) => {
                            setContent(text);
                        }}
                    ></TextInput>
                </View>
            </View>
            <View>
                {image && (
                    <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200, margin: 10 }}
                    />
                )}
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    pickImage();
                }}
            >
                <Text style={{ color: '#ffffff' }}>이미지 첨부하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    PostArticleButton();
                    navigation.navigate('Community');
                }}
            >
                <Text style={{ color: '#ffffff' }}>글쓰기</Text>
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

export default connect(mapStateToProps)(CreateArticle);
