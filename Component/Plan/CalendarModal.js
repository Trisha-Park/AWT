import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarModal = ({ modalVisible, closeModal, startDate, setDates }) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Calendar
                        current={startDate}
                        onPressArrowLeft={(subtractMonth) => subtractMonth()}
                        onPressArrowRight={(addMonth) => addMonth()}
                        onDayPress={(day) => {
                            setDates(day);
                        }}
                    />

                    <TouchableHighlight
                        style={{
                            ...styles.openButton,
                            backgroundColor: '#2196F3',
                            marginTop: 10,
                        }}
                        onPress={() => {
                            closeModal();
                        }}
                    >
                        <Text style={styles.textStyle}>닫기</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default CalendarModal;
