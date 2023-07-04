import React from 'react';
import { Providers } from '@/app/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
