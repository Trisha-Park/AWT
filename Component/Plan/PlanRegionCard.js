import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Text,
    View,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlanRegionCard = ({
    regionInfo,
    index,
    deleteRegionCard,
    setRegionPlan,
}) => {
    // set toDo
    const [isClickedTodos, setIsClickedTodos] = useState([false]);
    const [toDos, setToDos] = useState([...regionInfo.toDos]);

    // set region
    const [isClickedRegion, setIsClickedRegion] = useState(false);
    const [regionValue, setRegionValue] = useState(regionInfo.region);

    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={{
                    alignItems: 'flex-end',
                    marginTop: 10,
                    marginRight: 10,
                    marginBottom: 30,
                }}
                disabled={true}
                onPress={() => {
                    deleteRegionCard(index);
                }}
            >
                <FontAwesome name='close' size={24} color='black' />
            </TouchableOpacity>
            <ScrollView
                style={styles.cardScroll}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <View style={styles.header}>
                    {!isClickedRegion ? (
                        <TouchableOpacity
                            style={{
                                ...styles.regionText,
                                ...styles.boxShadow,
                            }}
                            onPress={() => {
                                setIsClickedRegion(true);
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}
                            >
                                {regionValue === ''
                                    ? '터치해서 여행지를 편집해보세요!'
                                    : regionValue}
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <View
                            style={{
                                ...styles.regionInput,
                                ...styles.boxShadow,
                            }}
                        >
                            <TextInput
                                value={regionValue}
                                onChangeText={(text) => {
                                    setRegionValue(text);
                                }}
                                style={{
                                    fontSize: 18,
                                    paddingRight: 55,
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setIsClickedRegion(false);
                                    setRegionPlan(index, regionValue, toDos);
                                }}
                            >
                                <MaterialCommunityIcons
                                    name='grease-pencil'
                                    size={24}
                                    color='black'
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                <View style={styles.toDoView}>
                    {toDos.map((toDo, idx) => {
                        return isClickedTodos[idx] ? (
                            <View
                                key={idx}
                                style={{
                                    ...styles.regionInput,
                                }}
                            >
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
                                    style={{
                                        fontSize: 18,
                                        paddingRight: 55,
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        setIsClickedTodos((prevState) => [
                                            ...prevState.slice(0, idx),
                                            false,
                                            ...prevState.slice(idx + 1),
                                        ]);
                                        setRegionPlan(
                                            index,
                                            regionValue,
                                            toDos
                                        );
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name='grease-pencil'
                                        size={24}
                                        color='black'
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity
                                key={idx}
                                onPress={() => {
                                    setIsClickedTodos((prevState) => [
                                        ...prevState.slice(0, idx),
                                        true,
                                        ...prevState.slice(idx + 1),
                                    ]);
                                }}
                                style={{
                                    ...styles.regionText,
                                    ...styles.boxShadow,
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                    }}
                                >
                                    {toDos[idx] === ''
                                        ? '터치해서 새 계획을 만들어 보세요!'
                                        : toDos[idx]}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                            setToDos((prevState) => [...prevState, '']);
                            setIsClickedTodos((prevState) => [
                                ...prevState,
                                false,
                            ]);
                        }}
                    >
                        <AntDesign
                            name='pluscircleo'
                            size={24}
                            color='#0066FF'
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f1f2f6',
    },
    cardScroll: {
        alignSelf: 'stretch',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 30,
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    regionText: {
        backgroundColor: '#fff',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10,
    },
    regionInput: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#EBECF0',
        backgroundColor: '#fff',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 3,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    toDoView: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    toDoInput: {
        height: 35,
        width: 250,
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
