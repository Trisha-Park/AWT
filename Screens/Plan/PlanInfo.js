import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import { StackActions, useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';
import { postPlans } from '../../Actions/PlanActions';

const PlanInfo = ({ route, navigation }) => {
    const {
        params: { fullDates, dailyPlan, index },
    } = route;

    const [plans, setPlans] = useState([...Array(fullDates.length).fill('')]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            if (dailyPlan) {
                setPlans((prevState) => [
                    ...prevState.slice(0, index),
                    dailyPlan,
                    ...prevState.slice(index + 1),
                ]);
            }
        }
    }, [isFocused]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('PlanInfoDetail', {
                    day: item.day,
                    date: item.date,
                });
            }}
        >
            <Card style={styles.card}>
                <Text style={styles.day}>{item.day}</Text>
                <Text>{item.date}</Text>
            </Card>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                data={fullDates}
                renderItem={renderItem}
                keyExtractor={(item) => item.day}
                style={styles.container}
            />
            <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => {
                    // TODO: plans를 axios post 요청
                    // TODO: Main 가자마자 플랜 axios로 불러오고 isPlan === true 바꿔주기
                    navigation.dispatch(StackActions.popToTop());
                    navigation.navigate('PlanEdit');
                }}
            >
                <Text style={styles.btnTitle}>모든 계획 저장하기</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    card: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveBtn: {
        backgroundColor: 'blue',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
    },
});

const mapStateToProps = (state, owmProps) => {
    console.log(state);
    // return {
    //     deleteToDos: (idx) => dispatch(deleteToDos(idx)),
    // };
};

const mapDispatchToProps = (dispatch, owmProps) => {
    return {
        postPlans: (plans, planId) => dispatch(postPlans(plans, planId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanInfo);
