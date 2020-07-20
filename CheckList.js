import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem } from 'native-base';
import CheckListContent from './CheckListContent';

const CheckList = ({ dummy }) => {
	return (
		<Card style={styles.card}>
			<CardItem style={styles.titles}>
				<Text>{dummy.day ? `${dummy.day}일차` : null}</Text>
				<Text>
					{dummy.region ? dummy.region : '내일로를 시작하시나요?'}
				</Text>
			</CardItem>
			<CardItem style={styles.items}>
				{dummy.toDos ? (
					dummy.toDos.map((toDo, idx) => (
						<CheckListContent toDo={toDo} key={idx} />
					))
				) : (
					<CheckListContent toDo='계획을 설정해 보세요!' />
				)}
			</CardItem>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 1,
		borderRadius: 10,
	},
	titles: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	items: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
});

export default CheckList;
