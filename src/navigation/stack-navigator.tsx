import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-screen';
import DetailScreen from '../screens/detail-screen';

export type StackParamList = {
	Home: undefined;
	Details: { userId: string; name: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

function StackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					title: 'Home',
				}}
			/>
			<Stack.Screen
				name='Details'
				component={DetailScreen}
				options={({ route }) => ({ title: route.params.name })}
			/>
		</Stack.Navigator>
	);
}

export default StackNavigator;
