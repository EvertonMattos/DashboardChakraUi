import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
interface NavLinkProps {
  icon: ElementType;
  children?: string;
  href: string;
}
export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  

  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" mt="8" alignItems="center"{...rest}>
        <Icon as={icon} fontSize="28" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
