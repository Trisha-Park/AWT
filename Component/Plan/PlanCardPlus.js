//! Deprecated !
//! 버그로 인해 더이상 사용되지 않을 예정입니다.
//! 추후 확실히 필요하지 않은 것을 확인하면 파일을 삭제하겠습니다.

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'native-base';

const PlanCardPlus = ({ addRegionCard }) => {
    return (
        <Card style={styles.card}>
            <TouchableOpacity onPress={addRegionCard}>
                <AntDesign name='pluscircleo' size={24} color='black' />
            </TouchableOpacity>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default PlanCardPlus;
