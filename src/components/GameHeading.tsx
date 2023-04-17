import { Heading } from '@chakra-ui/react'

import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  }`

  return (
    <Heading as='h2' marginY={5}>
      Games {heading}
    </Heading>
  )
}

export default GameHeading
