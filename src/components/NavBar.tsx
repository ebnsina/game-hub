import { HStack, Image, Text } from '@chakra-ui/react'

import ColorModeSwitch from './ColorModeSwitch'
import logo from '../assets/logo.svg'
import SearchInput from './SearchInput'

function NavBar() {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='30px' />

      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
