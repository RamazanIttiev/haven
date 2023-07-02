import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import { ColorModeToggler } from '../components/colorModeToggler';

export const App = () => {
	return (
		<Box minH="100vh" id="root">
			<Center p="4" pb="20">
				<Box maxW="35ch">
					<Heading mb="2">Color Mode Test</Heading>
					<ColorModeToggler />

					<Heading mt="8" mb="2" size="sm">
						Text
					</Heading>
				</Box>
			</Center>
		</Box>
	);
};
