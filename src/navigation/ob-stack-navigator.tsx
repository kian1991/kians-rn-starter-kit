import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/hello-screens/home-screen';
import DetailScreen from '../screens/hello-screens/detail-screen';
import OnboardingScreen1 from '../screens/onboarding-screens/screen-1';
import OnboardingScreen2 from '../screens/onboarding-screens/screen-2';

export type ObStackParamList = {
	Screen1: undefined;
	Screen2: undefined;
	Screen3: undefined;
	Screen4: undefined;
};

const Stack = createNativeStackNavigator<ObStackParamList>();

export default function OnboardingStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Screen1'
				component={OnboardingScreen1}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Screen2'
				component={OnboardingScreen2}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
