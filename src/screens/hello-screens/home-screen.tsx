import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/hello-stack-navigator';
import { Box } from '@gluestack-ui/themed';
import { Text } from 'react-native';

type HomeProps = {
	navigation: NativeStackNavigationProp<StackParamList>;
};

export default function HomeScreen({ navigation }: HomeProps) {
	return (
		<Box justifyContent='center' alignItems='center' h='$full' gap={20}>
			<Text>Home</Text>
		</Box>
	);
}
