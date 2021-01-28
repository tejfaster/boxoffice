import React from 'react';
import Nav from './Nav';
import Title from './Title'

export default function MainPageLayout({children}) {
    return (
        <div>
            <Title title='Box Office' subtitle='Are you looking for an movie or a title'/>
            <Nav/>
            {children}
        </div>
    )
}
