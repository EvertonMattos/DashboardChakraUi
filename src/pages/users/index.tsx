
import { Box, Button,Text,Flex,Heading, Icon, Table, Th, Thead, Tr,Td,Checkbox, Tbody} from '@chakra-ui/react'
import {RiAddBoxLine, RiPencilLine} from 'react-icons/ri'
import  {Header} from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import  {SideBar} from '../../components/SideBar'

export default function UserList(){
  return(
    <Box>
      <Header/>
      <Flex w='100%' my='6' maxWidth={1400} mx='auto' px='6'>
        <SideBar/>
        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
        <Flex mb='8' justify='space-between' alignItems='center'>
        <Heading size='lg' fontWeight='normal' >
         Usuários 
        </Heading>
        <Button 
        as='a' 
        size='sm' 
        fontSize='sm'
        colorScheme='pink'
        leftIcon={<Icon as={RiAddBoxLine} fontSize='18'/>}
        >
            Cria Novo
        </Button>
        </Flex>    
        <Table colorScheme='whiteAlpha'>
          <Thead>
            <Tr>
            <Th px='6' color='gray.300' width='8' >
              <Checkbox colorScheme='pink' />
            </Th>

              <Th>Usuario</Th>
              <Th>Data de cadastro</Th>
              <Th></Th>
            </Tr>
    
          </Thead>
          <Tbody>
            <Tr>
              <Td px='6'>
              <Checkbox colorScheme='pink'/>
              </Td>
              <Td>
                <Box >
                  <Text fontWeight='bold'>Everton Mattos</Text>
                  <Text fontSize='sm' color='gray.300'>devsukita@gmail.com</Text>
                </Box>
              </Td>
              <Td>
                04 de Abril, 2022
              </Td>
              <Td>
              <Button 
              as='a' 
              size='sm' 
              fontSize='sm'
              colorScheme='purple'
              leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
        >
            Cria Novo
        </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Pagination/>
        </Box>
      </Flex>
    </Box>
  )
}