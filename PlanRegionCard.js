import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Card, CardItem } from 'native-base';

// 서버보낼때 null인 value는 필터링
const PlanRegionCard = () => {
	const [regionValue, setRegionValue] = useState('');
	const [count, setCount] = useState(1);
	const [toDos, setToDos] = useState([]);

	return (
		<Card style={styles.card}>
			<CardItem>
				<TextInput
					style={styles.regionInput}
					value={regionValue}
					onChangeText={(text) => {
						setRegionValue(text);
					}}
				/>
			</CardItem>
			<CardItem style={styles.toDoView}>
				{Array(count)
					.fill(0)
					.map((toDo, idx) => (
						<TextInput
							style={styles.toDoInput}
							value={toDos[idx]}
							onChangeText={(text) => {
								setToDos((prevState) => [
									...prevState.slice(0, idx),
									text,
									...prevState.slice(idx + 1),
								]);
							}}
							key={idx}
						/>
					))}
				<TouchableOpacity
					style={styles.addButton}
					onPress={() => {
						setCount((prevState) => prevState + 1);
						setToDos((prevState) => [...prevState, '']);
					}}
				>
					<Text>+</Text>
				</TouchableOpacity>
			</CardItem>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		height: 400,
	},
	regionInput: {
		height: 40,
		width: 100,
		fontSize: 20,
		borderBottomColor: '#2c2c2c',
		borderBottomWidth: 1,
	},
	toDoView: {
		flexDirection: 'column',
	},
	toDoInput: {
		height: 35,
		width: 180,
		fontSize: 15,
		borderBottomColor: '#2c2c2c',
		borderBottomWidth: 1,
	},
	addButton: {
		backgroundColor: 'red',
		marginVertical: 20,
		paddingVertical: 7,
		paddingHorizontal: 10,
	},
});

export default PlanRegionCard;
