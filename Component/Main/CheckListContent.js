import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'native-base';

const CheckListContent = ({ toDo }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <View style={styles.checkListContent}>
            <CheckBox
                checked={toggleCheckBox}
                onPress={() =>
                    toggleCheckBox
                        ? setToggleCheckBox(false)
                        : setToggleCheckBox(true)
                }
                color='#0066FF'
            />
            <Text
                style={{
                    marginLeft: 20,
                    fontSize: 17,
                    marginBottom: 5,
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
