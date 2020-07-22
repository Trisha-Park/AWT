import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {} from 'native-base';

const CreateArticle = () => {
    return (
        <View>
            <View>
                <View style={styles.title}>
                    <TextInput placeholder='제목을 입력하세요.'></TextInput>
                </View>
                <View style={styles.text}>
                    <TextInput placeholder='내용을 입력하세요. (주의사항 들어갈 예정)'></TextInput>
                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text>글쓰기</Text>
                </TouchableOpacity>
                </View>
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
        padding : 10,
        marginTop : 10

    },
    button : {
        backgroundColor : "pink",
        width : 400,
        height : 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 5,
        marginTop : 300

    }
});

export default CreateArticle;
