import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Station = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require('../img/map.png')}
				resizeMode='contain'
				style={{ width: '100%' }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Station;
