import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckListContent = ({ toDo }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <View style={styles.checkListContent}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={() =>
                    toggleCheckBox
                        ? setToggleCheckBox(false)
                        : setToggleCheckBox(true)
                }
            />
            <Text>{toDo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    checkListContent: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    defaultTextSetting: {
        fontFamily: '',
    },
});

export default CheckListContent;
