import { AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SiderbarDrawerProvider } from './contexts/SidebarDrawerContext'
import { makeServer } from '../components/service/mirage'
import {QueryClientProvider,QueryClient} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
function MyApp({ Component, pageProps }:AppProps) {
 if(process.env.NODE_ENV === 'development'){
   makeServer()
 }
 const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider  theme={theme}>
      <SiderbarDrawerProvider>
      <Component {...pageProps} />
      </SiderbarDrawerProvider>
      <ReactQueryDevtools/>
    </ChakraProvider>
    </QueryClientProvider>
)}

export default MyApp
