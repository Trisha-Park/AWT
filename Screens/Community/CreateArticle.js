import React, { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
//import * as MediaLibrary from 'expo-media-library';
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
    // 로딩여부
    //const [loading, setLoading] = useState(false);
    // 선택된 사진
    const [image, setImage] = useState();
    // 접근 권한 허용?
    //const [hasAllow, setHasAllow] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 사진첩 접근 권한 허용 함수 만들기
    // const requestCameraPermission = async () => {
    //     const response = await Permissions.getAsync(Permissions.CAMERA);
    //     //console.log(response);
    // };

    // 카메라 롤 허용
    // const requestRollPermission = async () => {
    //     const response = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    //     console.log(response);
    // };

    // 카메라 롤 허용 메소드
    //MediaLibrary.requestPermissionsAsync();
    //ImagePicker.requestCameraRollPermissionsAsync();

    const getPermissionAsync = async () => {
        // if (Constants.platform.ios) {
        //     const { statusios } = await Permissions.askAsync(
        //         Permissions.CAMERA_ROLL
        //     );
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
            console.log(result);
            if (!result.cancelled) {
                setImage(result.uri);
            }

        } catch (error) {
            console.log(error);
        }
    };
    //console.log(image);
 
    const PostArticleButton = async () => {
        try {
            const imageURL = new FormData();
            imageURL.append('file', {
                type: 'image/jpeg',
                uri: image,
            });
            const { data } = await axios.post(
                `http://192.168.0.5:5050/community`,
                {
                    imageURL,
                    userId: userInfo.userId,
                    name: 'trisha',
                    title,
                    article: content,
                },
                {
                    headers: {
                        authorization: resourceToken,
                        "content-type": "multipart/form-data"
                    },
                    withCredentials: true,
                }
            );
            //console.log(data);
            // console.log(title);
            // console.log(content);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        //requestCameraPermission();
        getPermissionAsync();
        //requestRollPermission();
    }, []);

    return (
        <View>
            <View>
                <View style={styles.title}>
                    <TextInput
                        placeholder='제목을 입력하세요.'
                        value={title}
                        onChangeText={(text) => {
                            setTitle(text);
                        }}
                    ></TextInput>
                </View>
                <View style={styles.text}>
                    <TextInput
                        placeholder='내용을 입력하세요. (주의사항 들어갈 예정)'
                        value={content}
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
                        style={{ width: 200, height: 200 }}
                    />
                )}
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    pickImage();
                }}
            >
                <Text>이미지 첨부하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    PostArticleButton();
                    navigation.navigate('Community');
                }}
            >
                <Text>글쓰기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        height: 40,
        width: 400,
        backgroundColor: 'skyblue',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 50,
        padding: 10,
    },
    text: {
        height: 300,
        width: 400,
        backgroundColor: 'olive',
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

const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
        userInfo: state.authReducer.userInfo,
    };
};

export default connect(mapStateToProps)(CreateArticle);
