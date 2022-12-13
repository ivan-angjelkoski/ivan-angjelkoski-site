import '../styles/globals.css';
import Navbar from './Navbar';
import 'highlight.js/styles/atom-one-dark.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="bg-brand-900 text-white">
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	);
}
