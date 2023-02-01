import { GlobalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Montserrat } from '@next/font/google'

import store from '../redux'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700']
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={montserrat.className}>
      <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
      </Provider>
    </main>
  )
}
