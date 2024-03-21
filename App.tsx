import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import './src/global.css';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import StackNavigator from './src/navigation/hello-stack-navigator';
import TabNavigator from './src/navigation/tab-navigator';
import OnboardingStackNavigator from './src/navigation/ob-stack-navigator';

export default function App() {
	const isFirstLaunch = true;

	return (
		<GluestackUIProvider config={config} colorMode='dark'>
			<NavigationContainer>
				{isFirstLaunch ? <OnboardingStackNavigator /> : <TabNavigator />}
			</NavigationContainer>
		</GluestackUIProvider>
	);
}
