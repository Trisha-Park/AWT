import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { checkPlan, deletePlans } from '../../Actions/planActions';

const DeletePlanCard = ({
    navigation,
    isPlanExist,
    checkPlan,
    deletePlans,
}) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => {
                if (isPlanExist) {
                    // 삭제, 토스트 메시지를 추가
                    Alert.alert('계획 삭제', '정말로 삭제하시겠습니까?', [
                        {
                            text: '삭제',
                            onPress: () => {
                                console.log('삭제');
                                deletePlans();
                                checkPlan(false);
                                navigation.navigate('MyPage');
                            },
                        },
                        {
                            text: '취소',
                            onPress: () => {
                                console.log('취소');
                            },
                        },
                    ]);
                } else {
                    // plan 페이지로 리다이렉트
                    navigation.navigate('Plan');
                }
            }}
        >
            <Text style={styles.text}>
                {isPlanExist ? '메인에서 계획 삭제' : '계획 추가하기'}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f2f6',
        borderRadius: 5,
        paddingVertical: 75,
        paddingHorizontal: 18,
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#747D8C',
        marginTop: 7,
    },
});

const mapStateToProps = (state) => {
    return {
        isPlanExist: state.planReducer.isPlanExist,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkPlan: (isPlanExist) => dispatch(checkPlan(isPlanExist)),
        deletePlans: () => dispatch(deletePlans()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePlanCard);
