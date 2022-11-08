import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PrismicProvider } from '@prismicio/react'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PrismicProvider>
			<Component {...pageProps} />
		</PrismicProvider>
	)
}
