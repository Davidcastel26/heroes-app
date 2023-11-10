import { useReducer } from 'react'
import { AuthContext } from '../context/AuthContext'
import { authReducer } from '../context/authReducer'

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState);

  return (
    <AuthContext.Provider value={{}}>
        { children }
    </AuthContext.Provider>
  )
}
