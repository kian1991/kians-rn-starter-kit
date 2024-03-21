import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { BatteryState, usePowerState } from 'expo-battery';
import { MotiView } from 'moti';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {
	BottomTabBarProps,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { TabList } from '../navigation/tab-navigator';
import { useFocusEffect } from '@react-navigation/native';

function TextMono({ children }: { children: React.ReactNode }) {
	return <Text className='font-mono font-bold'>{children}</Text>;
}

const BatteryStateMap = {
	[BatteryState.FULL]: 'FULL',
	[BatteryState.CHARGING]: 'CHARGING',
	[BatteryState.UNPLUGGED]: 'UNPLUGGED',
	[BatteryState.UNKNOWN]: 'UNKNOWN',
};

export default function Device({ navigation, route }: BottomTabNavigationProp<TabList>) {
	const { lowPowerMode, batteryLevel, batteryState } = usePowerState();
	const width = useSharedValue(0);

	const batteryLevelPercent = Math.floor(batteryLevel * 100);

	useFocusEffect(() => {
		width.value = 0;
		setTimeout(() => {
			width.value = withSpring(width.value + batteryLevelPercent);
		}, 200);
	});

	return (
		<View className='flex-1 justify-center items-start bg-teal-100 w-full '>
			<View className='mx-auto gap-2'>
				<Text className='text-2xl font-mono font-bold'>📱 DEVICE INFO</Text>

				<View className='flex flex-row items-center'>
					<TextMono>Battery Level: </TextMono>
					<View className='border-2 w-[100]'>
						<Animated.View
							className='h-[20] bg-green-500 justify-center items-center'
							style={{ width }}>
							<Text>{batteryLevelPercent}%</Text>
						</Animated.View>
					</View>
				</View>

				<TextMono>Low Power Mode: {lowPowerMode ? 'ON' : 'OFF'}</TextMono>

				<TextMono>Battery State: {BatteryStateMap[batteryState]}</TextMono>
			</View>
		</View>
	);
}
