import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config'

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

const initialState = {
    show: "Component did mount",
    isLoading: true,
    error: null
}

function Show() {
    const { id } = useParams()

    const [state, dispatch] = useReducer(reducer, initialState);

    // const [show, setshow] = useState("Component did mount ")
    // const [isLoading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    console.log(state)
    useEffect(() => {

        let isMounted = true

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
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
    }, [id])


    // console.log('show', show)
    // if (isLoading) {
    //     return <div>Data is Loading</div>
    // }
    // if (error) {
    //     return <div>Error occurred :{error}</div>
    // }
    return <div>this is show page</div>
}

export default Show