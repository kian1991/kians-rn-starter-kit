import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	AtSignIcon,
	RadioIcon,
	RemoveIcon,
	SettingsIcon,
	SunIcon,
} from '@gluestack-ui/themed';
import Hello from '../tabs/hello';
import World from '../tabs/world';
import Settings from '../tabs/settings';

export type TabList = {
	Hello: undefined;
	World: undefined;
	Settings: undefined;
};

const Tab = createBottomTabNavigator<TabList>();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: route.name === 'Hello' ? false : true,
				tabBarIcon: ({ focused, color, size }) => {
					// You can return any component that you like here!
					switch (route.name) {
						case 'Hello':
							return <AtSignIcon color={focused ? 'teal' : 'gray'} />;
						case 'World':
							return <SunIcon color={focused ? 'teal' : 'gray'} />;
						case 'Settings':
							return <SettingsIcon color={focused ? 'teal' : 'gray'} />;
						default:
							return <RemoveIcon />;
					}
				},
				tabBarActiveTintColor: 'teal',
				tabBarInactiveTintColor: 'gray',
			})}>
			<Tab.Screen name='Hello' component={Hello} />
			<Tab.Screen name='World' component={World} />
			<Tab.Screen name='Settings' component={Settings} />
		</Tab.Navigator>
	);
}
