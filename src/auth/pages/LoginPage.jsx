import { Button, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import ToggleColorMode from "../../ui/btnColorMode"

export const LoginPage = () => {

  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/marvel',{
      replace: true,
    });
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <Text as="h1">
          Login
        </Text>

        <ToggleColorMode />
      </div>
      <hr />
      <Button
        className="mt-3"
        onClick={ onLogin }
      >
        Login
      </Button>
    </div>
  )
}
