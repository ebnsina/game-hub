import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red'

  return (
    <Badge colorScheme={color} borderRadius={4} paddingX={2}>
      {score}
    </Badge>
  )
}

export default CriticScore
