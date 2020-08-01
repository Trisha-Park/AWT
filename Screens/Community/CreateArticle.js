import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const PostArticleButton = async () => {
        try {
            const { data } = await axios.post(
                `http://192.168.0.5:5050/community`,
                {
                    userId: 1,
                    name: 'trisha',
                    title,
                    article: content,
                }
            );
            console.log(data);
            console.log(title);
            console.log(content);
        } catch (error) {
            console.log(error);
        }
    };

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

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    PostArticleButton();
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

export default CreateArticle;
