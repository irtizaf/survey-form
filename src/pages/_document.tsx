import { Html, Head, Main, NextScript } from 'next/document'
import ChakraWrapper from '../../public/components/ChakraWrapper'

export default function Document() {
  return (
    <Html lang="en">
      <ChakraWrapper>
      <Head  />
      <body style={{background:"#7EA2FF"}}>
        <Main />
        <NextScript />
      </body>
      </ChakraWrapper>
    </Html>
  )
}
