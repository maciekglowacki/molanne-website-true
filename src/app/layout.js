import './globals.css';
import StoryblokProvider from '@/components/StoryblokProvider';

export const metadata = {
	title: 'Molanné',
	description: 'Molanné business website',
};

export default function RootLayout({ children }) {
	const currentYear = new Date().getFullYear();
	return (
		<StoryblokProvider>
			<html lang="en">
				<body>
					{children}
					<footer>All rights reserved © {currentYear} </footer>
				</body>
			</html>
		</StoryblokProvider>
	);
}
