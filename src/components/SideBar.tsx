import { Box, Stack, Text,Link,Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export  function SideBar (){
return(
  <Box as='aside' w='64' mr='8'>
    <Stack spacing='12' align='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
                GERAL    
          </Text>
          <Stack spacing='4' align='strech'>
            <Link display='flex' mt='8' alignItems='center' >  
            <Icon as={RiDashboardLine} fontSize='28' />
            <Text ml='4' fontWeight='medium'>Dashboard</Text>
            </Link>
            <Link display='flex' mt='8' alignItems='center' >  
            <Icon as={RiContactsLine} fontSize='28' />
            <Text ml='4' fontWeight='medium'>Usuário</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>
                AUTOMAÇÃO    
          </Text>
          <Stack spacing='4' align='strech'>
            <Link display='flex' mt='8' alignItems='center' >  
            <Icon as={RiInputMethodLine} fontSize='28' />
            <Text ml='4' fontWeight='medium'>Formulários</Text>
            </Link>
            <Link display='flex' mt='8' alignItems='center' >  
            <Icon as={RiGitMergeLine} fontSize='28' />
            <Text ml='4' fontWeight='medium'>Automação</Text>
            </Link>
          </Stack>
        </Box>
    </Stack>
  </Box>
)
}