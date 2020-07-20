import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckListContent from './CheckListContent';

const dummy = {
	day: 1,
	region: '서울',
	toDos: ['일어나기', '집에가기', '저녁먹기'],
};

const CheckList = () => {
	return (
		<>
			<View style={styles.titles}>
				<Text style={styles.defaultTextSetting}>
					{dummy.day ? `${dummy.day}일차` : null}
				</Text>
				<Text style={styles.defaultTextSetting}>
					{dummy.region ? dummy.region : '내일로를 시작하시나요?'}
				</Text>
			</View>
			<View style={styles.container}>
				{dummy.toDos ? (
					dummy.toDos.map((toDo, idx) => (
						<CheckListContent toDo={toDo} key={idx} />
					))
				) : (
					<CheckListContent toDo='계획을 설정해 보세요!' />
				)}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	titles: {
		flex: 1,
		alignItems: 'flex-start',
	},
	container: {
		flex: 3,
	},
	defaultTextSetting: {
		fontFamily: '',
	},
});

export default CheckList;
