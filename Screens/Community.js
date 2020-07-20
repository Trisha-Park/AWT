import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

Community = () => {
    return (
        <View>
            <TouchableOpacity>
            <Text>누르면 아티클 컴포 들어갈 자리</Text>
            <Text>아티클 컴포 들어가요</Text>
            <Text>아티클 컴포 들어가요</Text>
            <TouchableOpacity style={styles.button}>
                <Text>🖋글쓰기</Text>
            </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 300,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent : "center",
        padding: 8,
        borderRadius: 5,
        marginTop : 600
    },
});

export default Community;
