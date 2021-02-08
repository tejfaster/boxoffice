import { useReducer, useEffect } from 'react'

function showsReducer(prevState, action){

    switch (action.type){
        case 'ADD':{
            return [...prevState, action.showId]
        }
        case 'REMOVE':{
            return prevState.filter(showId => showId !== action.showId)
        }

        default:
            return prevState
    }
}

function usePersistedReducer() {

    const [state, dispatch] = useReducer(reducer, initialState, (inital) => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : inital
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, keyf])

    return [state, dispatch];
}

export function useShows(key = 'shows') {
    return usePersistedReducer(showsReducer, [], key)
}