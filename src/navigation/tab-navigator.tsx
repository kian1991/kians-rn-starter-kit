import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hello from '../tabs/hello';
import Settings from '../tabs/settings';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Device from '../tabs/device';

export type TabList = {
	Hello: undefined;
	Device: undefined;
	Settings: undefined;
};

const Tab = createBottomTabNavigator<TabList>();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName='Device'
			screenOptions={({ route }) => ({
				headerShown: route.name === 'Hello' ? false : true,
				tabBarIcon: ({ focused, color, size }) => {
					// You can return any component that you like here!
					switch (route.name) {
						case 'Hello':
							return (
								<Ionicons name='trash' color={focused ? 'teal' : 'gray'} size={16} />
							);
						case 'Device':
							return (
								<Ionicons name='dice-sharp' color={focused ? 'teal' : 'gray'} size={16} />
							);
						case 'Settings':
							return (
								<Ionicons name='settings' color={focused ? 'teal' : 'gray'} size={16} />
							);
						default:
							return (
								<Ionicons name='newspaper' color={focused ? 'teal' : 'gray'} size={16} />
							);
					}
				},
				tabBarActiveTintColor: 'teal',
				tabBarInactiveTintColor: 'gray',
			})}>
			<Tab.Screen name='Hello' component={Hello} options={{}} />
			<Tab.Screen name='Device' component={Device} />
			<Tab.Screen name='Settings' component={Settings} />
		</Tab.Navigator>
	);
}
