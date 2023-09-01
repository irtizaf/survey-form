import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import FormProvider from './context/context'
import theme from '../../theme/theme'
import { Lemonada } from 'next/font/google'

export const lemonada = Lemonada({
  subsets:["latin"],


})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </FormProvider>
  )
}
