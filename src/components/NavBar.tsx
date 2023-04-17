import { HStack, Image, Text } from '@chakra-ui/react'

import ColorModeSwitch from './ColorModeSwitch'
import logo from '../assets/logo.svg'

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
