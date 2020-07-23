import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

const dummy = {
    currentSelected: ['서울', '여수엑스포', '광주'],
    allResult: ['우분투', '조아', '절대', '우분투', '해'],
};

const Select = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>어디로 가시나요?</Text>
                </View>
                <View style={styles.currentSelected}>
                    <Text style={styles.currentSelectedText}>최근검색</Text>
                    <View>
                        {dummy.currentSelected.map((region, idx) => (
                            <Text key={idx}>{region}</Text>
                        ))}
                    </View>
                </View>
                <View style={styles.allResult}>
                    {dummy.allResult.map((region, idx) => (
                        <Text key={idx}>{region}</Text>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        justifyContent: 'flex-end',
        height: 80,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bdc3c7',
        paddingBottom: 15,
        paddingLeft: 10,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    currentSelected: {
        paddingLeft: 10,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#bdc3c7',
    },
    currentSelectedText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    allResult: {
        paddingLeft: 10,
        paddingVertical: 15,
    },
});

export default Select;
