import { types } from '../types/types';

export const authReducer = ( state = {}, aciton ) => {

    switch( aciton.type ){
        case types.login:
            return {
                ...state,
                logged: true,
                name: aciton.payload
            };
        case types.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
}