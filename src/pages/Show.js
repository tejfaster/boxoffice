import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config'

function Show() {
    const { id } = useParams()
    const [show, setshow] = useState("Component did mount ")
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        let isMounted = true

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(results => {

                setTimeout(() => {
                    if (isMounted) {
                        setshow(results);
                        setLoading(false);
                    }
                }, 2000)
            }).catch(err => {
                if (isMounted) {
                    setError(err.message)
                    setLoading(false);
                }
            })
        return () => {
            isMounted = false
        }
    }, [id])

    console.log('show', show)
    if (isLoading) {
        return <div>Data is Loading</div>
    }
    if (error) {
        return <div>Error occurred :{error}</div>
    }
    return <div>this is show page</div>
}

export default Show
