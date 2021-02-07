  import React from 'react'
  import ShowCards from './ShowCards'
  import imagenotfound from '../../assets/not-found.png'

  import {FlexGrid} from '../Style'
  
  export default function ShowGrid({data}) {
      return (
          <FlexGrid>
              {data.map(({show})=> 
                  <ShowCards 
                  key={show.id}
                  id={show.id}
                  name={show.name}
                  image={show.image ? show.image.medium: imagenotfound}
                  summary={show.summary}
                  />
                  )                  
              }
          </FlexGrid>
      )
  }
  