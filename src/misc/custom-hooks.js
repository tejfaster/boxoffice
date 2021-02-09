import { useReducer, useEffect, useState } from 'react'
import {apiGet} from './config'

function showsReducer(prevState, action) {

    switch (action.type) {
        case 'ADD': {
            return [...prevState, action.showId]
        }
        case 'REMOVE': {
            return prevState.filter(showId => showId !== action.showId)
        }

        default:
            return prevState
    }
}

function usePersistedReducer(reducer, initialState, key) {

    const [state, dispatch] = useReducer(reducer, initialState, (inital) => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : inital
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, dispatch];
}

export function useShows(key = 'shows') {
    return usePersistedReducer(showsReducer, [], key)
}

export function useLastQuery(key = 'lastQuery') {
    const [input, setInput] = useState(() => {
        const persisted = sessionStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : ""
    });

    const setPersistedInput = (newState) => {
        setInput(newState)
        sessionStorage.setItem(key, JSON.stringify(newState))
    }

    return [input, setPersistedInput]
}


const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return { isLoading: false, error: null, show: action.show }
        }

        case 'FETCH_FAILED': {
            return { ...prevState, isLoading: false, error: action.error, }
        }
        default: return prevState
    }
}

export function useShow(showId) {
    const [state, dispatch] = useReducer(
        reducer,
        {
            show: "Component did mount",
            isLoading: true,
            error: null
        }
    );

    // const [show, setshow] = useState("Component did mount ")
    // const [isLoading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    // console.log(state)

    useEffect(() => {

        let isMounted = true

        apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
            .then(results => {
                setTimeout(() => {
                    if (isMounted) {
                        dispatch({ type: 'FETCH_SUCCESS', show: results })
                        // setshow(results);
                        // setLoading(false);
                    }
                }, 2000)
            }).catch(err => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_FAILED', error: err.message })
                    // setError(err.message)
                    // setLoading(false);
                }
            })
        return () => {
            isMounted = false
        }
    }, [showId])

    return state
}