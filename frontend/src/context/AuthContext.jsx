import { createContext, useContext, useEffect, useReducer, useMemo } from 'react'

const getInitialUser = () => {
    try {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    } catch (error) {
        console.error('Error parsing user data from localStorage:', error)
        return null
    }
}

const initialState = {
    user: getInitialUser(),
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
    isLoading: false,
    error: null
};

const authContext = createContext(initialState)

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token,
                isLoading: false,
                error: null
            }
        
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null,
                isLoading: false,
                error: null
            }

        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'REFRESH_TOKEN':
            return {
                ...state,
                token: action.payload
            }

        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const useAuthContext = () => useContext(authContext)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {   
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('role', state.role);
        localStorage.setItem('token', state.token);
    }, [state.user, state.role, state.token]);

    const contextValue = useMemo(() => ({
        user: state.user, 
        token: state.token,
        role: state.role,
        isLoading: state.isLoading,
        error: state.error,
        dispatch
    }), [state.user, state.token, state.role, state.isLoading, state.error]);

    return (
        <authContext.Provider 
            value={{contextValue}}
        >
            {children}
        </authContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}