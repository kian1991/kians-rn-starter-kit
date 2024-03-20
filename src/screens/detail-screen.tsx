import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { StackParamList } from '../navigation/stack-navigator';
import { MotiText } from 'moti';

type Props = {
	navigation: NativeStackNavigationProp<StackParamList>;
	route: RouteProp<StackParamList, 'Details'>;
};

export default function DetailsScreen({ navigation, route }: Props) {
	return (
		<View className='flex-1 justify-center items-center gap-5'>
			<MotiText
				className='text-6xl text-slate-700'
				from={{ scale: 0.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: 'timing', delay: 500 }}>
				🦭
			</MotiText>
			<Text>{route.params.userId}</Text>
		</View>
	);
}
