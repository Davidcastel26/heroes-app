// import  from 'react'
import { useColorMode} from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/button'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
 
const ToggleColorMode = () => {

    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      className='ml-3 mr-1'
      onClick={() => toggleColorMode()}>
      {
        colorMode === "dark" ? <SunIcon color="orange.400" /> : <MoonIcon color="blue.700"/>
      }
    </Button>  
  )
}

export default ToggleColorMode;