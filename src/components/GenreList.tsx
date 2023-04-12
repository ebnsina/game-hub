import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'

import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenrer: (genre: Genre) => void
}

function GenreList({ onSelectGenrer }: Props) {
  const { data: genres, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <Spinner />

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

            <Button
              onClick={() => onSelectGenrer(genre)}
              fontSize='xl'
              variant='link'
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
