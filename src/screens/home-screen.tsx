import { Text as TextRN } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/stack-navigator';
import { Box, Button, ButtonText } from '@gluestack-ui/themed';
import { MotiText } from 'moti';

type HomeProps = {
	navigation: NativeStackNavigationProp<StackParamList>;
};

export default function HomeScreen({ navigation }: HomeProps) {
	const [count, setCount] = useState('🦭');

	return (
		<Box justifyContent='center' alignItems='center' h='$full' gap={20}>
			<MotiText
				className='text-3xl text-slate-700'
				from={{ scale: 0.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: 'spring' }}>
				Kian's Starter
			</MotiText>
			<Box w={'$1/2'} my={'$6'} h={'$1/3'}>
				<TextRN className='text-3xl text-center'>{count}</TextRN>
			</Box>
			<Box flexDirection='row' w='$full' justifyContent='center' columnGap={20}>
				<Button
					onPress={() => setCount(count + '🦭')}
					size='sm'
					variant='solid'
					action='secondary'
					isDisabled={false}
					isFocusVisible={false}>
					<ButtonText>ADD</ButtonText>
				</Button>
				<Button
					onPress={() => setCount('🦭')}
					size='sm'
					variant='outline'
					action='negative'>
					<ButtonText>RESET</ButtonText>
				</Button>
			</Box>
			<Button
				variant='link'
				onPress={() =>
					navigation.navigate('Details', { userId: 'ID2349', name: 'Change Me' })
				}>
				<ButtonText>Details</ButtonText>
			</Button>
		</Box>
	);
}
