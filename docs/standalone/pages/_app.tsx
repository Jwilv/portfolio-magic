import '@/styles/globals.css'
import 'react-vertical-timeline-component/style.min.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
