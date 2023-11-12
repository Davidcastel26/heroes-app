import { Button, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import ToggleColorMode from "../../ui/btnColorMode"
import { AuthContext } from "../context/"
import { useContext } from "react"

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('David C')

    navigate(lastPath,{
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
