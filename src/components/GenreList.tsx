import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'

import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

function GenreList() {
  const { data: genres } = useGenres()

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />

            <Text fontSize='xl'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
