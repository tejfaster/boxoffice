  import React from 'react'
  import ShowCards from './ShowCards'
  //    import imagenotfound from '../../assets/not-found.png'

  export default function ShowGrid({data}) {
      return (
          <div>
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
          </div>
      )
  }
  