
import { Box, Button,Text,Flex,Heading, Icon, Table, Th, Thead, Tr,Td,Checkbox, Tbody, useBreakpointValue, Spinner} from '@chakra-ui/react'
import {RiAddBoxLine, RiPencilLine} from 'react-icons/ri'
import  {Header} from '../../components/Header'
import { Pagination } from '../../components/PaginationItem/Pagination'
import  {SideBar} from '../../components/SiderBar/index'
import Link from 'next/link'
import { userUsers } from '../../components/service/hooks/useUsers'
export default function UserList(){
  const {data, isLoading,isFetching,error} =userUsers()
// console.log(data)
  const isDrawalerSidebar= useBreakpointValue({
    base:false,
    lg:true,
  })
 
  return(
    <Box>
      <Header/>
      <Flex w='100%' my='6' maxWidth={1400} mx='auto' px='6'>
        <SideBar/>
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
        <Flex mb='8' justify='space-between' alignItems='center'>
        <Heading size='lg' fontWeight='normal' >
         Usuários 
         {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4'/>}
        </Heading>
        <Link href='/users/create' passHref>
        <Button 
        as='a' 
        size='sm' 
        fontSize='sm'
        colorScheme='pink'
        leftIcon={<Icon as={RiAddBoxLine} fontSize='18'/>}
        >
            Cria Novo
        </Button>
        </Link>
        </Flex>    
          {isLoading ? (
            <Flex justify='center'>
              <Spinner/>
            </Flex>
          ):error?(
            <Flex justify='center'>
              <Text>Falla ao obter dados do servidor</Text>
            </Flex>
          ):(
            <>
            <Table colorScheme='whiteAlpha'>
          <Thead>
            <Tr>
            <Th px={['4','4','6']} color='gray.300' width='8' >
              <Checkbox colorScheme='pink' />
            </Th>

              <Th>Usuario</Th>
              <Th>Data de cadastro</Th>
              <Th></Th>
            </Tr>
    
          </Thead>
          <Tbody>
           {data.map(user=>{
            return(
              <Tr key={user.id}>
              <Td  px={['4','4','6']}>
              <Checkbox colorScheme='pink'/>
              </Td>
              <Td>
                <Box >
                  <Text fontWeight='bold'>{user.name}</Text>
                  <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                </Box>
              </Td>
              {isDrawalerSidebar &&(<Td>
               {user.createdAt}
              </Td>)}
              <Td>
              <Button 
              as='a' 
              size='sm' 
              fontSize='sm'
              colorScheme='purple'
              leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
        >
          Editar
        </Button>
              </Td>
            </Tr>
            )
           })}
          </Tbody>
        </Table>
        <Pagination/>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}