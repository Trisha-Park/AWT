import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Card, CardItem } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

// 서버보낼때 null인 value는 필터링
const PlanRegionCard = () => {
    const [regionValue, setRegionValue] = useState('');
    const [count, setCount] = useState(1);
    const [toDos, setToDos] = useState([]);

    return (
        <Card>
            <ScrollView style={styles.card}>
                <CardItem style={{ justifyContent: 'center' }}>
                    <TextInput
                        style={styles.regionInput}
                        value={regionValue}
                        onChangeText={(text) => {
                            setRegionValue(text);
                        }}
                    />
                </CardItem>
                <CardItem style={styles.toDoView}>
                    {Array(count)
                        .fill(0)
                        .map((toDo, idx) => (
                            <TextInput
                                style={styles.toDoInput}
                                value={toDos[idx]}
                                onChangeText={(text) => {
                                    setToDos((prevState) => [
                                        ...prevState.slice(0, idx),
                                        text,
                                        ...prevState.slice(idx + 1),
                                    ]);
                                }}
                                key={idx}
                            />
                        ))}
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                            setCount((prevState) => prevState + 1);
                            setToDos((prevState) => [...prevState, '']);
                        }}
                    >
                        <AntDesign name='pluscircleo' size={24} color='black' />
                    </TouchableOpacity>
                </CardItem>
            </ScrollView>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
    },
    regionInput: {
        height: 40,
        width: 100,
        fontSize: 20,
        borderBottomColor: '#2c2c2c',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    toDoView: {
        flexDirection: 'column',
    },
    toDoInput: {
        height: 35,
        width: 180,
        fontSize: 15,
        borderBottomColor: '#2c2c2c',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    addButton: {
        marginVertical: 20,
        paddingVertical: 7,
        paddingHorizontal: 10,
    },
});

export default PlanRegionCard;
