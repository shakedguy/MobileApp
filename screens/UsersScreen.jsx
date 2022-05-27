import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const getMenu = async () => {
	const response = await axios.get('http://www.socialloginproject.com/api/menu');
	console.log(response.data);
};

const UsersScreen = () => {
	useEffect(() => {
		getMenu();
	}, []);

	return (
		<View style={styles.container}>
			<Text>UsersScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default UsersScreen;
