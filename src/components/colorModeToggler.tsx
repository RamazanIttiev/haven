'use client';

import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export const ColorModeToggler = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Toggle color mode"
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
			borderRadius="full"
			size="sm"
			bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
			_hover={{ bg: colorMode === 'light' ? 'gray.300' : 'gray.500' }}
			_focus={{ outline: 'none' }}
		/>
	);
};
