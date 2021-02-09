import React from 'react'
import ShowCards from './ShowCards'
import imagenotfound from '../../assets/not-found.png'

import { FlexGrid } from '../Style'
import { useShows } from '../../misc/custom-hooks'

export default function ShowGrid({ data }) {

    const [starredShows, dispatchStarred] = useShows()

    return (
        <FlexGrid>
            {data.map(({ show }) => {

                const isStarred = starredShows.includes(show.id)
                
                const onStarClick = () => {
                   if(isStarred){
                       dispatchStarred({type:'REMOVE',showId: show.id})
                   } else {
                       dispatchStarred({type:'ADD',showId:show.id})
                   }
                }

                return <ShowCards
                    key={show.id}
                    id={show.id}
                    name={show.name}
                    image={show.image ? show.image.medium : imagenotfound}
                    summary={show.summary}
                    onStarClick={onStarClick}
                    isStarred ={isStarred}
                />
            })
            }
        </FlexGrid>
    )
}
