import { 
      Divider, 
      Text } from "@chakra-ui/react"
import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <>
      <Text fontSize='5xl'>DC Comics</Text>
      <Divider />
      <HeroList publisher='DC Comics'/>
    </>
  )
}
