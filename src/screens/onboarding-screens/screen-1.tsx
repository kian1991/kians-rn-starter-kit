import { View, Text } from 'react-native';
import React from 'react';
import { MotiPressable } from 'moti/interactions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ObStackParamList } from '../../navigation/ob-stack-navigator';

export default function OnboardingScreen1({
	navigation,
}: {
	navigation: NativeStackNavigationProp<ObStackParamList>;
}) {
	return (
		<View className='flex-1 bg-slate-800 justify-center'>
			<View className='flex-1 justify-center items-center gap-3'>
				<Text className='text-8xl font-bold text-white'>🚀</Text>
				<Text className='tracking-tighter text-neutral-200 font-bold text-3xl'>
					WELCOME TRAVELER
				</Text>
				<MotiPressable
					onPress={() => {
						navigation.navigate('Screen2');
					}}
					from={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'spring',
						duration: 430,
					}}>
					<Text className='text-sky-200 tracking-tighter text-xl mt-12'>GET STARTED</Text>
				</MotiPressable>
			</View>
		</View>
	);
}
