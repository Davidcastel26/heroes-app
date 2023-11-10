import { useReducer } from 'react'
import { AuthContext } from '../context/AuthContext'
import { authReducer } from '../context/authReducer'
import { types } from '../types/types'

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState);

    const login = async ( name = '') => {
      const action = {
        type: types.login,
        payload: {
          id: 'ABC',
          name: name
        }
      }
      dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    }}>
        { children }
    </AuthContext.Provider>
  )
}
