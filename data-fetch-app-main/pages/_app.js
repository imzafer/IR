import { ChakraProvider,Button } from '@chakra-ui/react'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Button margin={10}><Link href="/">HOME 🏠</Link></Button>
    </ChakraProvider>
  )
}
export default MyApp