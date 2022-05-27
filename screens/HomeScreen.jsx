import React from 'react';
import { StyleSheet, View, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';
import analytics from '@react-native-firebase/analytics';

const window = Dimensions.get('window');

const HomeScreen = ({}) => {
	const { login, isLoading } = useAuth();
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={require('../assets/auth_icon3x.png')} style={styles.backgroundImg}>
				<View style={styles.upsideContainer}>
					<Title style={styles.title}>Hello, Welcome to Social Login App</Title>
				</View>
				<View style={styles.downsideContainer}>
					<View style={styles.emptyBox} />
					<View style={styles.buttonContainer}>
						<Button
							style={styles.button}
							labelStyle={styles.label}
							color='#0077b6'
							mode='contained'
							uppercase={false}
							loading={isLoading}
							onPress={login}>
							Login
						</Button>
						<Button
							onPress={async () =>
								await analytics().logEvent('basket', {
									id: 3745092,
									item: 'mens grey t-shirt',
									description: ['round neck', 'long sleeved'],
									size: 'L',
								})
							}>
							Add To Basket
						</Button>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	backgroundImg: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		width: window.width,
		opacity: 0.9,
	},
	upsideContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: window.width,
	},
	downsideContainer: {
		flex: 3,
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		width: window.width,
		justifyContent: 'center',
	},
	emptyBox: {
		width: window.width,
		flex: 2,
	},
	buttonContainer: {
		flex: 1,
	},
	button: {
		borderColor: '#0077b6',
		paddingHorizontal: 15,
		paddingVertical: 8,
	},
	label: {
		fontSize: 16,
	},
	title: {
		fontSize: 22,
	},
});
export default HomeScreen;
