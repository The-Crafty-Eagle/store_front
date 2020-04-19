import React, { useReducer, createContext } from 'react'

export const ProductsContext = createContext()

const initialState = {
	products: []
		
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS':
      return {
        ...state, 
				products: action.payload
			}
		default:
			throw new Error ()
	}
}

export const ProductsContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <ProductsContext.Provider value={[state, dispatch]}>{children}</ProductsContext.Provider>
}




