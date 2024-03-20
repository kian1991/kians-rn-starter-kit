import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AtSignIcon, RadioIcon, SunIcon } from '@gluestack-ui/themed';
import Hello from '../tabs/hello';
import World from '../tabs/world';

export type TabList = {
	Hello: undefined;
	World: undefined;
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
					}
				},
				tabBarActiveTintColor: 'teal',
				tabBarInactiveTintColor: 'gray',
			})}>
			<Tab.Screen name='Hello' component={Hello} />
			<Tab.Screen name='World' component={World} />
		</Tab.Navigator>
	);
}
