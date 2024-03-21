import React, { useState } from 'react';
import {
	Actionsheet,
	ActionsheetIcon,
	ActionsheetBackdrop,
	ActionsheetContent,
	ActionsheetDragIndicator,
	ActionsheetDragIndicatorWrapper,
	ActionsheetItem,
	ActionsheetItemText,
	ActionsheetFlatList,
	ActionsheetScrollView,
	ActionsheetSectionList,
	ActionsheetSectionHeaderText,
	ActionsheetVirtualizedList,
	Button,
	ButtonText,
	VStack,
	HStack,
	Icon,
	Box,
	FormControl,
	FormControlLabel,
	FormControlLabelText,
	Input,
	InputField,
	InputIcon,
	InputSlot,
	AddIcon,
	Image,
	Text,
	Center,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function ActionSheet({
	showActionsheetProp,
	...props
}: {
	showActionsheetProp?: boolean;
}) {
	const [showActionsheet, setShowActionsheet] = useState(false);
	const handleClose = () => {
		setShowActionsheet(false);
	};

	return (
		<Center>
			<Button onPress={() => setShowActionsheet(true)}>
				<ButtonText>Open</ButtonText>
			</Button>
			<Actionsheet
				isOpen={showActionsheet || showActionsheetProp}
				onClose={handleClose}
				{...props}>
				<ActionsheetBackdrop />
				<ActionsheetContent>
					<ActionsheetDragIndicatorWrapper>
						<ActionsheetDragIndicator />
					</ActionsheetDragIndicatorWrapper>
					<ActionsheetItem onPress={handleClose} isDisabled>
						<ActionsheetItemText>Delete</ActionsheetItemText>
					</ActionsheetItem>
					<ActionsheetItem onPress={handleClose}>
						<ActionsheetItemText>Share</ActionsheetItemText>
					</ActionsheetItem>
					<ActionsheetItem onPress={handleClose}>
						<ActionsheetItemText>Play</ActionsheetItemText>
					</ActionsheetItem>
					<ActionsheetItem onPress={handleClose}>
						<ActionsheetItemText>Favourite</ActionsheetItemText>
					</ActionsheetItem>
					<ActionsheetItem onPress={handleClose}>
						<ActionsheetItemText>Cancel</ActionsheetItemText>
					</ActionsheetItem>
				</ActionsheetContent>
			</Actionsheet>
		</Center>
	);
}
