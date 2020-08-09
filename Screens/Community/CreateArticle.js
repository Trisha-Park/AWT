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
import { Textarea } from 'native-base';

const CreateArticle = ({ navigation, userInfo, resourceToken }) => {
    const [imageObj, setImageObj] = useState({});
    const [image, setImage] = useState();
    const [imageName, setImageName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //? 갤러리 권한 허용 함수
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

    //? 이미지 가져오는 함수
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!result.cancelled) {
                const splitName = result.uri.split('/');
                const hello = splitName[splitName.length - 1].toString();
                setImageName(hello);
                setImage(result.uri);
                setImageObj(result);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const PostArticleButton = async () => {
        try {
            const formData = new FormData();
            formData.append('imageURL', {
                uri: imageObj.uri,
                name: imageName,
                type: 'image/jpg',
                height: imageObj.height,
                width: imageObj.width,
            });
            formData.append('userId', userInfo.userId);
            formData.append('name', userInfo.name);
            formData.append('title', title);
            formData.append('article', content);

            const { data } = await axios.post(
                `http://192.168.0.5:5050/community`,
                formData,
                {
                    headers: {
                        authorization: resourceToken,
                        'content-type': 'multipart/form-data',
                    },
                    withCredentials: true,
                }
            );
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
                        style={{ fontSize: 20}}
                        onChangeText={(text) => {
                            setTitle(text);
                        }}
                    ></TextInput>
                </View>
                <View style={styles.text}>
                    <Textarea
                        placeholder='내용을 입력하세요.'
                        style={{
                            width: 390,
                            height: 280,
                            justifyContent: 'flex-start',
                            alignContent: 'flex-start',
                            padding: 5,
                            textAlignVertical: 'top',
                            fontSize: 20,
                            color: 'grey',
                        }}
                        value={content}
                        multiline={true}
                        onChangeText={(text) => {
                            setContent(text);
                        }}
                    ></Textarea>
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
                <Text
                    style={{
                        color: '#ffffff',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    이미지 첨부하기
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    PostArticleButton();
                    navigation.navigate('Community');
                }}
            >
                <Text
                    style={{
                        color: '#ffffff',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    저장하기
                </Text>
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
        borderRadius: 20,
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
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#0066FF',
        width: 400,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 3,
        borderRadius: 20,
    },
});

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
        userInfo: state.authReducer.userInfo,
    };
};

export default connect(mapStateToProps)(CreateArticle);
