import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../pages/contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export  function Header(){
  const {onOpen} =useSidebarDrawer()
  const isWiderVersion = useBreakpointValue({
    base:false,
    lg:true
  })
  return(
    <Flex 
    as='header'
    w='100%'
    maxW={1480}
    h='20'
    mx='auto'
    px='6'
    align='center'
    >{
      !isWiderVersion &&(
        <IconButton
         aria-label="Open Navigation" 
        icon={<Icon as={RiMenuLine}/>}
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        mr='2'
        >
        </IconButton>
      )
    }
      <Logo/>
     { isWiderVersion && 
     <SearchBox/>}
      <NotificationNav/>
      <Profile showProfileData={isWiderVersion} />
    </Flex>
  )
}

function userSidebarDrawer(): {} {
  throw new Error("Function not implemented.");
}
