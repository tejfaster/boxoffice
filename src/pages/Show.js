/* eslint-disable no-underscore-dangle */
import React from 'react'
import { useParams } from 'react-router-dom'
import Details from '../components/show/Details'
import Season from '../components/show/Season'
import Cast from '../components/show/Cast'
import ShowMainData from '../components/show/ShowMainData'
import { InfoBlock, ShowPageWrapper } from './Show.styled'
import { useShow } from '../misc/custom-hooks'


function Show() {
    const { id } = useParams() 
    const {show ,isLoading, error} =useShow(id)

    console.log('show', show)
    if (isLoading) {
        return <div>Data is Loading</div>
    }
    if (error) {
        return <div>Error occurred :{error}</div>
    }

    return <ShowPageWrapper>
        <ShowMainData
            image={show.image}
            name={show.name}
            rating={show.rating}
            summary={show.summary}
            tags={show.genres}
        />
        <InfoBlock>
            <h2>Details</h2>
            <Details
                status={show.status}
                network={show.network}
                premiered={show.premiered}
            />
        </InfoBlock>

        <InfoBlock>
            <h2>Season</h2>
            <Season seasons={show._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
            <h2>Cast</h2>
            <Cast cast={show._embedded.cast} />
        </InfoBlock>
    </ShowPageWrapper>
}

export default Show
