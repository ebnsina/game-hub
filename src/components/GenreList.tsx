import { ReactNode } from 'react'
import useGenres from '../hooks/useGenres'

interface Props {
  children: ReactNode
}

function GenreList() {
  const { genres } = useGenres()
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList