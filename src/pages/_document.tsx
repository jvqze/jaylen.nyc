import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class ADocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						href="https://avatars.githubusercontent.com/u/52697072?v=4"
					/>
					<meta name="theme-color" content="#ffffff" />
					<meta
						name="description"
						content="welcome to my website! :^)"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="dark:text-white antialiased dark:bg-ThemeDark bg-cover bg-center">
					<Main />
					<NextScript />
					<script async src="/theme.js" />
				</body>
			</Html>
		);
	}
}