import { SimpleGrid, Text } from '@chakra-ui/react'

import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'

function GameGrid() {
  const { data: games, isLoading, error } = useGames()

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
