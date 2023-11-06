import { 
  Divider, 
  Text } from "@chakra-ui/react"
import { HeroList } from "../components"

export const MarvelPage = () => {
return (
<>
  <Text fontSize='5xl'>DC Comics</Text>
  <Divider />
  <HeroList publisher='Marvel Comics'/>
</>
)
}
