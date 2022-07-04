import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function NavDrawaler(){
  return(
    <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href='users/create'>Usuário</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} href='/formulario'>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}href='/automação'>Automação</NavLink>
        </NavSection>
      </Stack>
  )
}