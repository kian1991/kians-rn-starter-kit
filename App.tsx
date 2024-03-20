import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import './src/global.css';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/stack-navigator';
import TabNavigator from './src/navigation/tab-navigator';

export default function App() {
	return (
		<GluestackUIProvider config={config}>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</GluestackUIProvider>
	);
}
