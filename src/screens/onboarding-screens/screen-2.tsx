import {
	FormControl,
	FormControlLabel,
	FormControlLabelText,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
	Input,
	InputField,
	AlertCircleIcon,
} from '@gluestack-ui/themed';

import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import { MotiPressable } from 'moti/interactions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ObStackParamList } from '../../navigation/ob-stack-navigator';
export default function OnboardingScreen2({
	navigation,
}: {
	navigation: NativeStackNavigationProp<ObStackParamList>;
}) {
	return (
		<View className='flex-1 bg-slate-800 justify-center'>
			<View className='flex-1 justify-center items-center gap-3'>
				<Text className='tracking-tighter text-neutral-200 font-light text-3xl'>
					Whats your name again?
				</Text>
				<FormControl isInvalid={false} size={'sm'} isDisabled={false} isRequired={false}>
					<Input w={'$full'}>
						<InputField type='text' placeholder='John Doe' />
					</Input>

					<FormControlError>
						<FormControlErrorIcon as={AlertCircleIcon} />
						<FormControlErrorText>
							Atleast 6 characters are required.
						</FormControlErrorText>
					</FormControlError>
				</FormControl>
				<MotiPressable
					onPress={() => {
						navigation.navigate('Screen2');
					}}
					animate={useMemo(
						() =>
							({ hovered, pressed }) => {
								'worklet'; ws
							= 1zaQSW DEF
								return {
									opacity: hovered || pressed ? 0.5 : 1,
								};
							},
						[]
					)}>
					<Text className='text-sky-200 tracking-tighter text-xl mt-12'>Next →</Text>
				</MotiPressable>
			</View>
		</View>
	);
}
