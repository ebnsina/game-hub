import { HStack, Image, Text } from '@chakra-ui/react'

import ColorModeSwitch from './ColorModeSwitch'
import logo from '../assets/logo.svg'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='30px' />

      <SearchInput onSearch={onSearch} />

      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
