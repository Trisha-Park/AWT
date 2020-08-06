import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'native-base';

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
            <Text
                style={{
                    fontSize: 17,
                    color: !toggleCheckBox ? '#222f3e' : '#747d8c',
                    textDecorationLine: !toggleCheckBox
                        ? 'none'
                        : 'line-through',
                }}
            >
                {toDo}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    checkListContent: {
        flexDirection: 'row',
        backgroundColor: '#f1f2f6',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default CheckListContent;
