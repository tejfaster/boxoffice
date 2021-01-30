import React from 'react'

// import { SearchCard } from '../Style'
import {StyledActorCard} from './ActorCard.style'

function ActorCard({ image, name, gender, country, birthday, deathday }) {
    return (
        <StyledActorCard>
            <div>
                <div className='img-wrapper'>
                    <img type='img' src={image} alt="actor" />
                </div>
                <h1>
                    {name} {gender ? `(${gender})` : null}
                </h1>
                <p>{country ? `Comes from ${country}` : 'No country known'}</p>
                {birthday ? <p>Born {birthday}</p> : null}
                <p className='deathday'>{deathday ? `Died ${deathday}` : 'Alive'}</p>
            </div>
      </StyledActorCard>
    );
};

export default ActorCard;  
