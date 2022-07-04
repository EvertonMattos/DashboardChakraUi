import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../pages/contexts/SidebarDrawerContext";
import { NavDrawaler } from "./NavDrawaler";

export function SideBar() {
  const { isOpen, onClose} =useSidebarDrawer()
  const isDrawalerSidebar= useBreakpointValue({
    base:true,
    lg:false,
  })
  if(isDrawalerSidebar){
    return(
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg='gray.800' padding='4'>
          <DrawerCloseButton mt='6'/>
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
          <NavDrawaler/>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )}
  return (
    <Box as="aside" w="64" mr="8">
      <NavDrawaler/>
    </Box>
  );
}
