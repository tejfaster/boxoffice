  import React from 'react'
  import ShowCards from './ShowCards'

  import {FlexGrid} from '../Style'
  
  export default function ShowGrid({data}) {
      return (
          <FlexGrid>
              {data.map(({show})=> 
                  <ShowCards 
                  key={show.id}
                  id={show.id}
                  name={show.name}
                  image={show.image ? show.image.medium: show.image.large}
                  summary={show.summary}
                  />
                  )                  
              }
          </FlexGrid>
      )
  }
  