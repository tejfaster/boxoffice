import React,{useEffect,useState} from 'react'

import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config'

function Show() {
   const {id} = useParams()
   const [show,setshow] = useState("Component did mount")

    useEffect(()=>{
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(results => {
            setshow(results)
        })
    },[id])

    console.log(show)

   return<div>this is show page</div>
}

export default Show
